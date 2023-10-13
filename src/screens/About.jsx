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
                    <div className="col-2 portrait ml-5"></div>
                    <div className="col-6 about-text">
                        Hey, thanks for checking out my site. I&apos;m Blake, a Software Engineer based in Seattle, WA, with over five years of experience in the tech industry.
                        <br/>
                        <br/>
                        My journey began at KEYSYS, where I dabbled in everything from crafting microservice-based CRMs to modernizing AngularJS code into sleek React solutions. After a rewarding two years there, I joined Pyx Health, where I honed my skills in frontend development and played a pivotal role in fortifying the test infrastructure.
                        <br/>
                        <br/>
                        In 2022, I joined Integrate as a Senior Software Engineer, where I&apos;ve been cooking up new auth services, diving deep into Kafka, leading the charge on a .NET 6 API, and more.
                        <br/>
                        <br/>
                        Outside of coding, I have a passion for weight lifting and enjoy exploring the breathtaking outdoors of Seattle. If you want to chat about tech, gaming, Pull Requests or Personal Records, feel free to reach out anytime!
                    </div>
                </div>
            <Footer />
        </>
    )
}