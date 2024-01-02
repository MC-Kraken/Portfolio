import { Col, Container, Row } from "react-bootstrap";
import { constants } from "../constants.js";
import { Navigation } from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Activity() {
    const [athlete, setAthlete] = useState();
    const getAthleteUrl = "https://www.strava.com/api/v3/athlete";
    const getActivitiesUrl = "https://www.strava.com/api/v3/athlete/activities";
    const [activities, setActivities] = useState();
    const location = useLocation();
    const accessToken = localStorage.getItem("strava_access_token");
    const queryParams = new URLSearchParams(location.search);
    const authCode = queryParams.get('code');

    useEffect(() => {
        if ((!accessToken || accessToken === 'undefined') && !authCode) {
            // testing with activity:read_all scope. Remove the _all when done testing private activities
            // update redirect_uri with prod domain when deployed
            window.location.href = `https://www.strava.com/oauth/authorize?client_id=${import.meta.env.VITE_STRAVA_CLIENT_ID}&redirect_uri=http://localhost:5173/activity&response_type=code&scope=read,activity:read_all`
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
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }, [authCode, accessToken]);

    if (accessToken?.expires === 0) {
        // get new token with refresh token, use serverless endpoint
        fetch('http://localhost:3000/api/getStravaTokenWithRefreshToken', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            //do I have to include a body? Delete this if not
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("strava_access_token", data.access_token);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    useEffect(() => {
        if (accessToken) {
            fetch(getAthleteUrl, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => setAthlete(data))
        }
    }, [accessToken])

    useEffect(() => {
        if (accessToken) {
            fetch(getActivitiesUrl, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("strava_access_token")}`
                }
            })
                .then(res => res.json())
                .then(data => setActivities(data))
        }
    }, [accessToken])

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
                {activities &&
                    <Row className="text-center">
                        <Col>
                            <h1>{`${activities[0].name}`}</h1>
                        </Col>
                    </Row>
                }
            </Container>
            <Footer />
        </>
    )
}