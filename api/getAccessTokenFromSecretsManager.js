import allowCors from "./_allowCors.js";
import { SecretService } from "./_secretService.js";

async function handler(request, response) {
  let accessToken = null;
  let expiresAt = null;
  const secretService = new SecretService();

  try {
    const data = await secretService.getSecret();
    console.log("getAccessTokenFromSecretsManager: " + JSON.stringify(data));
    const secret = JSON.parse(data.SecretString);
    accessToken = secret.accessToken;
    expiresAt = secret.expiresAt;
  } catch (err) {
    console.error("Error retrieving secret:", err);
    return response.status(400).json("There was an error fetching secrets");
  }

  return response.status(200).json({
    accessToken,
    expiresAt,
  });
}

export default allowCors(handler);
