import { Navigation } from "../components/Navigation.jsx";
import { constants } from "../constants.js";
import { Footer } from "../components/Footer.jsx";

export const About = () => {
    return (
        <>
                <Navigation current={constants.screens.about} />
                <header className="bg-transparent">
                    <div className="row text-center">
                        <div className="col">
                            <h1>About</h1>
                        </div>
                    </div>
                </header>
                <div className="row about justify-content-center">
                    <div className="col-4 portrait ml-5"></div>
                    <div className="col-6 about-text">Hello there! 👋 I’m a Senior Software Engineer currently living in
                        the beautiful city of Seattle. I’ve been in the tech industry for about five years now, and I’ve
                        had the opportunity to work on some really cool projects.
                        <br />
                        <br />
                        I started my journey at KEYSYS, where I got my hands dirty with everything from implementing a
                        microservice-based CRM to converting legacy AngularJS code into modern React code. After two
                        years at KEYSYS, I moved on to Pyx Health. There, I focused on front-end development and made
                        significant improvements to the app’s performance and test infrastructure.
                        <br />
                        <br />
                        In 2022, I joined Integrate as a Senior Software Engineer. At Integrate, I’ve engineered a new
                        auth service, built a Kafka solution, led the development of a new .NET 6 API, and much more.
                        <br />
                        <br />
                        Apart from my full-time job, I also work as a Game Tester for Good Gamer Group. It’s a fun gig
                        where I get to test unreleased games and provide feedback based on my preferences as a gamer.
                        <br />
                        <br />
                        When I’m not coding or gaming, you can find me exploring the beautiful outdoors of Seattle or
                        trying out new cafes and restaurants around the city. Feel free to reach out if you want to chat
                        about tech, gaming, or the best food spots in Seattle!
                    </div>
                </div>
            <Footer />
        </>
    )
}