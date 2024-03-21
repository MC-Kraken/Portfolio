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
          <img className="resume-frame" src="/resume.png" alt="" />
        </Row>
        <Row>
          <Col className="text-center d-flex justify-content-end">
            <a
              href="/BlakeMcCrackenResume.pdf"
              download
              rel="noopener noreferrer"
            >
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
  );
};
