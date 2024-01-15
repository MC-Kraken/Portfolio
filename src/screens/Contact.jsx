import { constants } from "../constants.js";
import { Navigation } from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const url = "https://script.google.com/macros/s/AKfycbynTNktvUqKoebazlhjir8mVl5LM8tyGBAQxv-4b8MJJyVmTOzlHsLFwyQNgYFLFxta/exec";

        fetch(url, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                window.location.href = "/thank-you";
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred. Please try again later.");
            });
    };


    return (
        <>
            <Navigation current={constants.screens.contact} />

            <Container fluid className="bg-transparent header">
                <Row className="text-center">
                    <Col>
                        <h1>Reach Out</h1>
                    </Col>
                </Row>
            </Container>

            <Form id="contactForm" onSubmit={handleSubmit}>
                <Row className="justify-content-center mb-2 mt-3">
                    <Col xs={10} md={6}>
                        <Form.Control
                            className="bg-dark text-white contact"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required />
                    </Col>
                </Row>

                <Row className="justify-content-center mb-2">
                    <Col xs={10} md={6}>
                        <Form.Control
                            className="bg-dark text-white contact"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required />
                    </Col>
                </Row>

                <Row className="justify-content-center mb-2">
                    <Col xs={10} md={6}>
                        <Form.Control
                            as="textarea"
                            className="contact bg-dark text-white"
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Your Message"
                            required />
                    </Col>
                </Row>

                <Row className="text-center">
                    <Col>

                        <Button type="submit" className="btn-dark">
                            Send Message
                        </Button>
                    </Col>
                </Row>
            </Form>

            <Footer />
        </>
    )
}