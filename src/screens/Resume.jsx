import { Navigation } from "../components/Navigation.jsx";
import { constants } from "../constants.js";
import { Footer } from "../components/Footer.jsx";
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
                <Row>
                    <Col className="text-center">
                        <a href="src/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="dark" className="mt-3">
                                Download
                            </Button>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <a href="src/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="dark" className="mt-3">
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