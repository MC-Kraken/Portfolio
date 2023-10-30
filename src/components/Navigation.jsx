import { constants } from "../constants.js";
import PropTypes from "prop-types";
import { Navbar, Nav } from 'react-bootstrap';

export const Navigation = ({current}) => {
    return (
        <Navbar expand="md" variant="light" bg="transparent">
            <Navbar.Brand href="/">Blake McCracken</Navbar.Brand>
            <span className="brand-subtext mr-auto d-lg-block pt-1">React / TypeScript / .NET / C#</span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/about" className={current === constants.screens.about ? "current" : ""}>
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/activity" className={current === constants.screens.activity ? "current" : ""}>
                            Activity
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/projects" className={current === constants.screens.projects ? "current" : ""}>
                            Projects
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/resume" className={current === constants.screens.resume ? "current" : ""}>
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact" className={current === constants.screens.contact ? "current" : ""}>
                            Contact
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

Navigation.propTypes = {
    current: PropTypes.string
};