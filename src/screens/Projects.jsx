import { Col, Container, Row } from "react-bootstrap";
import { Navigation } from "../components/Navigation.jsx";
import { constants } from "../constants.js";
import { CarouselComponent } from "../components/CarouselComponent.jsx";
import Footer from "../components/Footer.jsx";

export const Projects = () => {
    return (
        <>
            <Navigation current={constants.screens.projects} />
            <Container fluid className="bg-transparent header">
                <Row className="text-center">
                    <Col>
                        <h1>Projects</h1>
                    </Col>
                </Row>
            </Container>
            <Container className={"p-0"}>
                <CarouselComponent />
            </Container>
            <Footer />
        </>
    )
}