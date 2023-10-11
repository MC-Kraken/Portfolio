import { constants } from "../constants.js";
import { Navigation } from "../components/Navigation.jsx";

export const Contact = () => {
    return (
        <>
            <Navigation current={constants.screens.contact} />
            <header className="bg-trasparent">
                <div className="row text-center">
                    <div className="col">
                        <h1>Reach Out</h1>
                    </div>
                </div>
            </header>

            <form action="/contact" method="POST">
                <div className="d-flex mb-2 mt-3 justify-content-center">
                    <div className="col-6 pl-0 pr-0">
                        <input className="form-input bg-dark text-white justify-content-center contact" type="text"
                               name="name"
                               placeholder="Your Name" required />
                    </div>
                </div>
                <div className="d-flex mb-2 justify-content-center">
                    <div className="col-6 pl-0 pr-0">
                        <input
                            className="form-input bg-dark text-white placeholder-white justify-content-center contact"
                            type="email" name="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="d-flex mb-2 justify-content-center">
                    <div className="col-6 pl-0 pr-0">
                    <textarea className="contact bg-dark text-white" name="message" id="" cols="30" rows="10"
                              placeholder="Your Message" required></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <div className="col">
                        {/*TODO: make this input type submit when ready*/}
                        <a href="/contactpost">
                            <input className="btn btn-dark" type="button" value="Send Message" />
                        </a>
                    </div>
                </div>
            </form>
        </>
    )
}