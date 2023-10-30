import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from '../screens/About';
import { Resume } from '../screens/Resume';
import { Contact } from '../screens/Contact';
import { Landing } from "../screens/Landing.jsx";
import { ThankYou } from "../screens/ThankYou.jsx";
import { useEffect } from "react";
import { Projects } from "../screens/Projects.jsx";
import '../main.scss';
import Activity from "../screens/Activity.jsx";

const AppRouter = () => {
    useEffect(() => {
        const lockOrientation = async () => {
            if (screen.orientation) {
                try {
                    await screen.orientation.lock('portrait');
                } catch (error) {
                    console.log(error);
                }
            }
        };

        lockOrientation().then(() => "Orientation locked").catch(error => "Screen orientation lock execution error: " + error);
    }, []);

    return (
        <Router>
            <Routes className={"container"}>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/activity" element={<Activity />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
