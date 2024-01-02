import AWS from "aws-sdk";
import fetch from "node-fetch";
import allowCors from "./_allowCors.js";

async function handler(request, response) {
    const tokenExchangeUrl = "https://www.strava.com/api/v3/oauth/token";

    AWS.config.update({
        accessKeyId: process.env.VITE_AWS_ACCESS_KEY,
        secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
        region: "us-west-2"
    });
    const secretsManager = new AWS.SecretsManager();
    const secretName = "STRAVA_REFRESH_TOKEN";

    fetch(tokenExchangeUrl, {
        method: "POST",
        body: new URLSearchParams({
            client_id: process.env.VITE_STRAVA_CLIENT_ID,
            client_secret: process.env.VITE_STRAVA_CLIENT_SECRET,
            grant_type: "authorization_code",
            code: request.body.authCode
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

            return response.status(200).json({
                body: {
                    accessToken: data.access_token
                }
            })
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

export default allowCors(handler)