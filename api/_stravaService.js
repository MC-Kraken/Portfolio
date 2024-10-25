class StravaService {
  getAccessTokenFromSecretsManager() {
    return fetch(
      "https://www.blakemccracken.com/api/getAccessTokenFromSecretsManager",
    )
      .then((res) => res.json())
      .then((data) => {
        return {
          accessToken: data.accessToken,
          expiresAt: data.expiresAt,
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getStravaAccessTokenWithAuthCode(authCode) {
    return fetch(
      "https://www.blakemccracken.com/api/getStravaTokenWithAuthCode",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          code: authCode,
        }),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        return {
          accessToken: data.accessToken,
          expiresAt: data.expiresAt,
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getStravaAccessTokenWithRefreshToken() {
    return fetch(
      "https://www.blakemccracken.com/api/getStravaTokenWithRefreshToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        return {
          accessToken: data.accessToken,
          expiresAt: data.expiresAt,
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getActivities(accessToken) {
    return fetch("https://www.strava.com/api/v3/athlete/activities", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("There was an error fetching activities");
      })
      .then((data) => {
          const filteredActivities = data.filter((a) => a.type !== "WeightTraining");
          return {
              activities: filteredActivities.map((a) => a.id),
          };
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getActivity(accessToken, id) {
    return fetch(`https://www.strava.com/api/v3/activities/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("There was an error fetching activities");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const stravaService = new StravaService();
export default stravaService;