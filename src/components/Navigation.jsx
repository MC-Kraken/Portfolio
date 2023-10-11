import { constants } from "../constants.js";
import PropTypes from "prop-types";

export const Navigation = ({current}) => {
    return (
        <nav className="navbar navbar-expand-md bg-transparent">
            <a href="/about" className="navbar-brand">Blake McCracken</a><span
            className="brand-subtext mr-auto d-lg-block pt-1">React / TypeScript / C#</span>
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse"
                    data-target="#navBarMenu"
                    aria-controls="navBarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navBarMenu">
                <ul className="navbar-nav nav ml-auto">
                    <li className="nav-item">
                        <a className={current === constants.screens.about ? "nav-link current" : "nav-link"}
                           href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className={current === constants.screens.resume ? "nav-link current" : "nav-link"}
                           href="/resume">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className={current === constants.screens.contact ? "nav-link current" : "nav-link"}
                           id="contact" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Navigation.propTypes = {
    current: PropTypes.string
};