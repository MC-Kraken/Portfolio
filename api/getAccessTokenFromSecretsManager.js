import AWS from 'aws-sdk';
import allowCors from "./_allowCors.js";

async function handler(request, response) {
    let accessToken = null;
    let expiresAt = null

    AWS.config.update({
        // eslint-disable-next-line no-undef
        accessKeyId: process.env.VITE_AWS_ACCESS_KEY,
        // eslint-disable-next-line no-undef
        secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
        region: "us-west-2"
    });
    const secretsManager = new AWS.SecretsManager();
    const secretName = "STRAVA_AUTH";

    secretsManager.getSecretValue({SecretId: secretName}, (err, data) => {
        if (err) {
            console.error('Error retrieving secret:', err);
        } else {
            // Parse and use the secret value
            const secret = JSON.parse(data.SecretString);
            accessToken = secret.accessToken;
            expiresAt = secret.expiresAt
        }
    });

    return response.status(200).json({
        accessToken,
        expiresAt
    })
}

export default allowCors(handler)