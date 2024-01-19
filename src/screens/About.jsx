import { Navigation } from "../components/Navigation.jsx";
import { constants } from "../constants.js";
import Footer from "../components/Footer.jsx";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import TypewriterEffect from "../components/TypewriterEffect.jsx";

export const About = () => {
  const [firstLineTyped, setFirstLineTyped] = useState(false);
  const [secondLineTyped, setSecondLineTyped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstLineTyped(true);
    }, 1300);

    setTimeout(() => {
      setSecondLineTyped(true);
    }, 4350);
  }, []);

  return (
    <>
      <Navigation current={constants.screens.about} />
      <Container fluid className={`bg-transparent`} id={"typewriter"}>
        <TypewriterEffect
          firstLineTyped={firstLineTyped}
          secondLineTyped={secondLineTyped}
        />
      </Container>
      <Container>
        <Row className="about justify-content-center">
          <Col
            xs={{ span: 3, order: 1 }}
            sm={{ span: 3, order: 1 }}
            md={2}
            lg={2}
            className="ml-5"
          >
            <img className="portrait-frame" src="/portrait.jpeg" alt="" />
          </Col>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={10}
            lg={9}
            className="about-text bg-dark text-white"
          >
            Thanks for checking out my site. I&apos;m Blake, a Fullstack
            Software Engineer based in Seattle, WA, with five years of
            experience in the tech industry.
            <br />
            <br />
            Outside of building software, I have passions for gaming, urbanism,
            weight lifting, and exploring the breathtaking outdoors of Seattle.
            If you want to chat about tech, trains, hiking, biking, gaming, or
            PRs (Pull Requests or Personal Records), feel free to reach out
            anytime!
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
