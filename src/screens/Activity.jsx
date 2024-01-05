import { Card, Col, Container, Row } from "react-bootstrap";
import { constants } from "../constants.js";
import { Navigation } from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Activity() {
    const [athlete, setAthlete] = useState();
    const getAthleteUrl = "https://www.strava.com/api/v3/athlete";
    const getActivitiesUrl = "https://www.strava.com/api/v3/athlete/activities";
    const getActivityUrl = "https://www.strava.com/api/v3/activities";
    const [activities, setActivities] = useState([]);
    const [detailedActivities, setDetailedActivities] = useState([]);
    const location = useLocation();
    const accessToken = localStorage.getItem("strava_access_token");
    const expiresAt = localStorage.getItem("strava_expires_at");
    const currentTime = new Date().getTime() / 1000;
    const queryParams = new URLSearchParams(location.search);
    const authCode = queryParams.get('code');

    useEffect(() => {
        if ((!accessToken || accessToken === 'undefined') && !authCode) {
            // testing with activity:read_all scope. Remove the _all when done testing private activities
            // update redirect_uri with prod domain when deployed
            window.location.href = `https://www.strava.com/oauth/authorize?client_id=${import.meta.env.VITE_STRAVA_CLIENT_ID}&redirect_uri=http://localhost:5173/activity&response_type=code&scope=read,activity:read_all`
            return;
        }

        if (authCode) {
            fetch('http://localhost:3000/api/getStravaTokenWithAuthCode', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    code: authCode
                })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("strava_access_token", data.accessToken);
                    localStorage.setItem("strava_expires_at", data.expiresAt);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            return;
        }

        if (expiresAt < currentTime) {
            fetch('http://localhost:3000/api/getStravaTokenWithRefreshToken', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("strava_access_token", data.access_token);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }, [authCode, accessToken, expiresAt, currentTime]);

    useEffect(() => {
        if (accessToken) {
            fetch(getAthleteUrl, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                    throw new Error("There was an error fetching athlete");
                })
                .then(data => setAthlete(data))
                .catch(e => console.error(e))
        }
    }, [accessToken])

    useEffect(() => {
        if (accessToken) {
            fetch(getActivitiesUrl, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                    throw new Error("There was an error fetching activities");
                })
                .then(data => {
                    setActivities(data.map(a => a.id))
                })
                .catch(e => console.error(e));
        }
    }, [accessToken])

    useEffect(() => {
        if (activities.length && !detailedActivities.length) {
            activities.forEach(id => {
                fetch(`${getActivityUrl}/${id}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                    }
                })
                    .then(res => res.json())
                    .then(activity => setDetailedActivities([...detailedActivities, activity]))
                    .catch(error => {
                        console.error('Error:', error);
                    });
            })
        }
    }, [activities, detailedActivities, accessToken])

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
            <Container>
                <Row className="text-center">
                    <Col>
                        This page is under construction 🚧
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        Check back soon!
                    </Col>
                </Row>
                {athlete &&
                    <Row className="text-center">
                        <Col>
                            <h1>{`${athlete.firstname} ${athlete.lastname}`}</h1>
                        </Col>
                    </Row>
                }
                {detailedActivities.length && detailedActivities.map((a, i) => {
                    return (
                        <div key={`activity-${i}`} className={"card-container"}>
                            <Card style={{width: '18rem'}}>
                                <Card.Img className={"bg-dark text-white"} variant="top" src={a.photos.primary.urls["600"]} />
                                <Card.Body className={"bg-dark text-white"}>
                                    <Card.Title>{a.name}</Card.Title>
                                    <Card.Text>
                                        Card Text
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </Container>
            <Footer />
        </>
    )
}