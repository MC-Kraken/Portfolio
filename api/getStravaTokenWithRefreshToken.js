import AWS from 'aws-sdk';
import fetch from 'node-fetch';
import allowCors from "./_allowCors.js";

async function handler(request, response) {
    const tokenExchangeUrl = `https://www.strava.com/api/v3/oauth/token`;
    let refreshToken = null;

    AWS.config.update({
        // eslint-disable-next-line no-undef
        accessKeyId: process.env.VITE_AWS_ACCESS_KEY,
        // eslint-disable-next-line no-undef
        secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
        region: "us-west-2"
    });
    const secretsManager = new AWS.SecretsManager();
    const secretName = "STRAVA_AUTH";

    try {
        const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
        console.log("getAccessTokenFromRefreshToken: " + JSON.stringify(data));
        const secret = JSON.parse(data.SecretString);
        refreshToken = secret.refreshToken;
    } catch (err) {
        console.error('Error retrieving secret:', err);
        return response.status(400).json("There was an error fetching secrets");
    }

    fetch(tokenExchangeUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            // eslint-disable-next-line no-undef
            client_id: process.env.VITE_STRAVA_CLIENT_ID,
            // eslint-disable-next-line no-undef
            client_secret: process.env.VITE_STRAVA_CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log("getStravaTokenWithRefreshToken: " + JSON.stringify(data));
            secretsManager.updateSecret({
                SecretId: secretName,
                SecretString: JSON.stringify({
                    refreshToken: data.refresh_token,
                    accessToken: data.access_token,
                    expiresAt: data.expires_at
                }),
            }, (err, data) => {
                if (err) {
                    console.error("Error updating secret:", err);
                } else {
                    console.log("Secret updated successfully:", data);
                }
            });

            return response.status(200).json("Strava secrets updated successfully")
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export default allowCors(handler)