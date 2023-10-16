import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from '../screens/About';
import { Resume } from '../screens/Resume';
import { Contact } from '../screens/Contact';
import { Landing } from "../screens/Landing.jsx";
import '../main.scss';
import { ThankYou } from "../screens/ThankYou.jsx";
import { useEffect } from "react";

const AppRouter = () => {
    useEffect(() => {
        const lockOrientation = async () => {
            if (screen.orientation) {
                try {
                    await screen.orientation.lock('portrait');
                } catch (error) {
                    console.error("Screen orientation lock error: ", error);
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
            </Routes>
        </Router>
    );
};

export default AppRouter;
