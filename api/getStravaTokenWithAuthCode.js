import AWS from "aws-sdk";
import fetch from "node-fetch";
import allowCors from "./_allowCors.js";

async function handler(request, response) {
    const tokenExchangeUrl = "https://www.strava.com/api/v3/oauth/token";

    AWS.config.update({
        // eslint-disable-next-line no-undef
        accessKeyId: process.env.VITE_AWS_ACCESS_KEY,
        // eslint-disable-next-line no-undef
        secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
        region: "us-west-2"
    });
    const secretsManager = new AWS.SecretsManager();
    const secretName = "STRAVA_AUTH";

    fetch(tokenExchangeUrl, {
        method: "POST",
        body: new URLSearchParams({
            // eslint-disable-next-line no-undef
            client_id: process.env.VITE_STRAVA_CLIENT_ID,
            // eslint-disable-next-line no-undef
            client_secret: process.env.VITE_STRAVA_CLIENT_SECRET,
            grant_type: "authorization_code",
            code: request.body.code
        })
    })
        .then(res => res.json())
        .then(data => {
            secretsManager.updateSecret({
                SecretId: secretName,
                SecretString: JSON.stringify({refreshToken: data.refresh_token}),
            }, (err, data) => {
                if (err) {
                    console.error("Error updating secret:", err);
                } else {
                    console.log("Secret updated successfully:", data);
                }
            });
            secretsManager.updateSecret({
                SecretId: secretName,
                SecretString: JSON.stringify({accessToken: data.access_token}),
            }, (err, data) => {
                if (err) {
                    console.error("Error updating secret:", err);
                } else {
                    console.log("Secret updated successfully:", data);
                }
            });
            secretsManager.updateSecret({
                SecretId: secretName,
                SecretString: JSON.stringify({expiresAt: data.expire_at}),
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
            console.error("Error:", error);
        });
}

export default allowCors(handler)