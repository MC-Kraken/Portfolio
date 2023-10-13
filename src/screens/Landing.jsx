import { Navigation } from "../components/Navigation.jsx";
import { Button, Col, Container, Row } from "react-bootstrap";
import LandingTypewriterEffect from "../components/LandingTypewriterEffect.jsx";
import { Footer } from "../components/Footer.jsx";

export const Landing = () => {
    return (
        <>
            <Navigation />
            <Container fluid className="bg-transparent" id="landing">
                <LandingTypewriterEffect />
                <Row className="m-0 text-center">
                    <Col>
                        <Button variant="dark" className="mt-3" href="/about">Enter</Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}