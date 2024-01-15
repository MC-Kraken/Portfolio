import fetch from "node-fetch";
import allowCors from "./_allowCors.js";
import secretService from "./_secretService.js";

async function handler(request, response) {
  const tokenExchangeUrl = "https://www.strava.com/api/v3/oauth/token";

  fetch(tokenExchangeUrl, {
    method: "POST",
    body: new URLSearchParams({
      // eslint-disable-next-line no-undef
      client_id: process.env.VITE_STRAVA_CLIENT_ID,
      // eslint-disable-next-line no-undef
      client_secret: process.env.VITE_STRAVA_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: request.body.code,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("getStravaTokenWithAuthCode: " + JSON.stringify(data));
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
