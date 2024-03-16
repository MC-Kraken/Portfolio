import {
  Card,
  Carousel,
  CarouselItem,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { constants } from "../constants.js";
import { Navigation } from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import stravaService from "../../api/_stravaService.js";
import "leaflet/dist/leaflet.css";
import polyline from "@mapbox/polyline";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { SetViewToBounds } from "../components/SetViewToBounds.jsx";

export default function Activity() {
  const [activities, setActivities] = useState([]);
  const [detailedActivities, setDetailedActivities] = useState([]);
  const location = useLocation();
  const [accessToken, setAccessToken] = useState();
  const [expiresAt, setExpiresAt] = useState();
  const currentTime = new Date().getTime() / 1000;
  const queryParams = new URLSearchParams(location.search);
  const authCode = queryParams.get("code");
  const [isAccessTokenReady, setIsAccessTokenReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [polylines, setPolylines] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const isAccessTokenExpired = expiresAt < currentTime;
  // TODO: test out useQuery for keeping up with strava auth info/caching to prevent fetching every page load

  // Fetch secrets
  useEffect(() => {
    stravaService
      .getAccessTokenFromSecretsManager()
      .then((data) => {
        setAccessToken(data.accessToken);
        setExpiresAt(data.expiresAt);
        setIsAccessTokenReady(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Auth flow once secrets have been fetched
  useEffect(() => {
    if (isAccessTokenReady && !accessToken && !authCode) {
      window.location.href = `https://www.strava.com/oauth/authorize?client_id=${import.meta.env.VITE_STRAVA_CLIENT_ID}&redirect_uri=https://www.blakemccracken.com/activity&response_type=code&scope=read,activity:read`;
      return;
    }

    if (isAccessTokenReady && !accessToken && authCode) {
      stravaService
        .getStravaAccessTokenWithAuthCode(authCode)
        .then((data) => {
          setAccessToken(data.accessToken);
          setExpiresAt(data.expiresAt);
        })
        .catch((error) => {
          console.error(error);
        });
      return;
    }

    if (isAccessTokenReady && expiresAt < currentTime) {
      stravaService
        .getStravaAccessTokenWithRefreshToken()
        .then((data) => {
          setAccessToken(data.accessToken);
          setExpiresAt(data.expiresAt);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [authCode, accessToken, expiresAt, currentTime, isAccessTokenReady]);

  // Get activities
  useEffect(() => {
    if (isAccessTokenReady && !isAccessTokenExpired) {
      stravaService
        .getActivities(accessToken)
        .then((data) => {
          setActivities(data.activities);
        })
        .catch((e) => console.error(e));
    }
  }, [accessToken, isAccessTokenReady, isAccessTokenExpired]);

  // Loop through activities to get detailed activities
  useEffect(() => {
    if (activities.length && !detailedActivities.length) {
      activities.forEach((id) => {
        stravaService
          .getActivity(accessToken, id)
          .then((activity) => {
            setDetailedActivities((currentDetailedActivities) => [
              ...currentDetailedActivities,
              activity,
            ]);
            setPolylines((prevState) => ({
              ...prevState,
              [id]: polyline.decode(activity.map.polyline),
            }));
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => setIsLoading(false));
      });
    }
  }, [activities, detailedActivities, accessToken]);

  return (
    <>
      <Navigation current={constants.screens.activity} />
      <Container fluid className="bg-transparent header">
        <Row className="text-center">
          <Col>
            <h1>Activity</h1>
          </Col>
        </Row>
      </Container>
      <Container className="activity">
        {isLoading && (
          <>
            <Row>
              <Col className={"d-flex justify-content-center"}>
                <Spinner />
              </Col>
            </Row>
            <Row>
              <Col className={"d-flex justify-content-center"}>
                <p>Fetching activities from the Strava API...</p>
              </Col>
            </Row>
          </>
        )}

        {!isLoading && detailedActivities.length > 0 && (
          <Carousel activeIndex={activeIndex} onSelect={eventKey => setActiveIndex(eventKey)}>
            {detailedActivities.map((activity, i) => {
              return (
                <CarouselItem key={`carousel-item-${i}`}>
                  <div key={`activity-${i}`} className={"card-container"}>
                    <Card style={{ width: "18rem" }}>
                      {!activity.map.polyline && (
                        <Card.Img
                          className={"bg-dark text-white"}
                          variant="top"
                          src={activity.photos.primary.urls["600"] ?? ""}
                        />
                      )}
                      {activity.map.polyline && (
                        <MapContainer
                          center={[0, 0]}
                          zoom={13}
                          style={{ height: "214.5px", width: "100%" }}
                          key={activeIndex}
                        >
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          {polylines && (
                            <Polyline
                              positions={polylines[activity.id].map(
                                ([lat, lng]) => [lat, lng],
                              )}
                            />
                          )}
                          <SetViewToBounds polyline={polylines[activity.id]} activeIndex={activeIndex} mapIndex={i} />
                        </MapContainer>
                      )}
                      <Card.Body className={"bg-dark text-white"}>
                        <Card.Title>{activity.name}</Card.Title>
                        <Card.Text>{activity.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </Carousel>
        )}
      </Container>
      <Footer />
    </>
  );
}
