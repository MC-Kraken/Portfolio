import { Navigation } from "../components/Navigation.jsx";
import { constants } from "../constants.js";
import { Footer } from "../components/Footer.jsx";

export const Resume = () => {
    return (
        <>
            <Navigation current={constants.screens.resume} />
            <header className="bg-transparent">
                <div className="row text-center">
                    <div className="col">
                        <h1>Resume</h1>
                    </div>
                </div>
            </header>
            <div className="resume">
                <div className="col-2 thumbnail"></div>
            </div>
            <div>
                <div className="col text-center">
                    {/*TODO: add view button that links to the .png*/}
                    <a href="src/assets/resume.pdf" target="_blank">
                        <button className="btn btn-dark mt-3">Download</button>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}