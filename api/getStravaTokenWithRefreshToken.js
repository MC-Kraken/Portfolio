import fetch from "node-fetch";
import allowCors from "./_allowCors.js";
import secretService from "./_secretService.js";

async function handler(request, response) {
  const tokenExchangeUrl = `https://www.strava.com/api/v3/oauth/token`;
  let refreshToken = null;

  try {
    const data = await secretService.getSecret();
    console.log("getAccessTokenFromRefreshToken: " + JSON.stringify(data));
    const secret = JSON.parse(data.SecretString);
    refreshToken = secret.refreshToken;
  } catch (err) {
    console.error("Error retrieving secret:", err);
    return response.status(400).json("There was an error fetching secrets");
  }

  fetch(tokenExchangeUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      // eslint-disable-next-line no-undef
      client_id: process.env.VITE_STRAVA_CLIENT_ID,
      // eslint-disable-next-line no-undef
      client_secret: process.env.VITE_STRAVA_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("getStravaTokenWithRefreshToken: " + JSON.stringify(data));
      secretService.updateSecret(data);
      return response
        .status(200)
        .json({ accessToken: data.access_token, expiresAt: data.expires_at });
    })
    .catch((error) => {
      console.error(error);
    });
}

export default allowCors(handler);
