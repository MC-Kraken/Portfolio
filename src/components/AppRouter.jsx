import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from '../screens/About';
import { Resume } from '../screens/Resume';
import { Contact } from '../screens/Contact';
import { Landing } from "../screens/Landing.jsx";
import '../main.scss';
import { ContactPost } from "../screens/ContactPost.jsx";

const AppRouter = () => {
    return (
        <Router>
            <Routes className={"container"}>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contactpost" element={<ContactPost />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
