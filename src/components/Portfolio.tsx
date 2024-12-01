import React, {useState} from "react";
import {AnimatePresence} from "framer-motion";
import HomePage from "./home/HomePage.tsx";
import AboutPage from "./about/AboutPage.tsx";
import ProjectsPage from "./projects/ProjectsPage.tsx";
import ContactPage from "./contact/ContactPage.tsx";
import Navigation from "./layout/Navigation.tsx";


const Portfolio: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    const sections = {
        home: HomePage,
        about: AboutPage,
        projects: ProjectsPage,
        contact: ContactPage
    };

    return (
        <div className="relative">
            <Navigation
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            <AnimatePresence>
                {sections[activeSection as keyof typeof sections]()}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;