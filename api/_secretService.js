import AWS from "aws-sdk";
import { constants } from "../src/constants.js";

AWS.config.update({
    // eslint-disable-next-line no-undef
    accessKeyId: process.env.VITE_AWS_ACCESS_KEY,
    // eslint-disable-next-line no-undef
    secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
    region: constants.awsRegion,
});
const secretsManager = new AWS.SecretsManager();
const secretName = "STRAVA_AUTH";

export class SecretService {
    async getSecret() {
        await secretsManager
            .getSecretValue({SecretId: secretName})
            .promise()
    }

    updateSecret(data) {
        secretsManager.updateSecret(
            {
                SecretId: secretName,
                SecretString: JSON.stringify({
                    refreshToken: data.refresh_token,
                    accessToken: data.access_token,
                    expiresAt: data.expires_at,
                }),
            },
            (err, data) => {
                if (err) {
                    console.error("Error updating secret:", err);
                } else {
                    console.log("Secret updated successfully:", data);
                }
            },
        );
    }
}