import { Navigation } from "../components/Navigation.jsx";
import { Col, Container, Row } from "react-bootstrap";
import TypewriterEffect from "../components/TypewriterEffect.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import { constants } from "../constants.js";

export const Landing = () => {
    const [firstLineTyped, setFirstLineTyped] = useState(false);
    const [secondLineTyped, setSecondLineTyped] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFirstLineTyped(true);
        }, 1300);

        setTimeout(() => {
            setSecondLineTyped(true);
        }, 5350)
    }, []);

    return (
        <>
            <Navigation current={`${secondLineTyped ? constants.screens.about : ""}`}/>
            <Container fluid className={`bg-transparent ${secondLineTyped ? "d-none" : ""}`} id="landing">
                <TypewriterEffect firstLineTyped={firstLineTyped} secondLineTyped={secondLineTyped} />
            </Container>
            <div className={`fade-in ${secondLineTyped ? 'visible' : ''}`}>
                <Container fluid className="bg-transparent header">
                    <Row className="text-center">
                        <Col>
                            <h1>About</h1>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="about justify-content-center">
                        <Col xs={{span: 3, order: 1}} sm={{span: 3, order: 1}} md={2} lg={2}
                             className="portrait ml-5"></Col>
                        <Col xs={{span: 12, order: 2}} sm={{span: 12, order: 2}} md={10} lg={9} className="about-text">
                            Hey, thanks for checking out my site. I&apos;m Blake, a Software Engineer based in Seattle,
                            WA,
                            with five years of experience in the tech industry.
                            <br />
                            <br />
                            Outside of coding, I have passions for gaming, urbanism, weight lifting, and exploring the
                            breathtaking
                            outdoors of Seattle. If you want to chat about tech, trains, gaming, or PRs (Pull Requests
                            or
                            Personal
                            Records),
                            feel free to reach out anytime!
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}