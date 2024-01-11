import { Navigation } from "../components/Navigation.jsx";
import { constants } from "../constants.js";
import Footer from "../components/Footer.jsx";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Resume = () => {
    return (
        <>
            <Navigation current={constants.screens.resume} />
            <Container fluid className="bg-transparent header">
                <Row className="text-center">
                    <Col>
                        <h1>Resume</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="resume">
                    <Col className="thumbnail"></Col>
                </Row>
                {/*<div className="bg__layout-wrapper">*/}
                {/*    <div className="bg__frame">*/}
                {/*        <div className="bg__picture-wrapper">*/}
                {/*            <div className="bg__frame-inner-shadow-outer">*/}
                {/*                <div className="bg__frame-inner-shadow"></div>*/}
                {/*            </div>*/}
                {/*            <div className="bg__frame-inner-shine-outer">*/}
                {/*                <div className="bg__frame-inner-shine"></div>*/}
                {/*            </div>*/}
                {/*            <div className="bg__frame-inner-photo-shadow-outer">*/}
                {/*                <div className="bg__frame-inner-photo-shadow"></div>*/}
                {/*            </div>*/}
                {/*            <img className="bg__picture"*/}
                {/*                 src="/resume.png"*/}
                {/*                 alt="" />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Row>
                    <Col className="text-center d-flex justify-content-end">
                        <a href="/BlakeMcCrackenResume.pdf" download rel="noopener noreferrer">
                            <Button variant="dark" className="mt-3 resume-button">
                                Download
                            </Button>
                        </a>
                    </Col>
                    <Col className="text-center d-flex justify-content-start">
                        <a href="/resume.png" target="_blank" rel="noopener noreferrer">
                            <Button variant="dark" className="mt-3 resume-button">
                                View
                            </Button>
                        </a>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}