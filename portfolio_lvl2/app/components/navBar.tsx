import React, { useState } from "react";


import AboutPage from "./tabs/about";
import HomePage from "./tabs/home";
import ProjectsPage from "./tabs/projects";
import ContactPage from "./tabs/contact";

const NavBar = () => {
    const [view, setView] = useState<string>('home');


    const renderContent = () => {
        switch (view) {
            case 'about':
                return <AboutPage/>
            case 'projects':
                return <ProjectsPage/>
            case 'contact':
                return <ContactPage/>
            default:
                return <HomePage/>
        }
    }
    return (
        <div>
            {/*NavBar*/}
            <nav>
            <a href="#" onClick={() => setView('home')} className={`p-2 ${view === 'home' ? 'underline decoration-green-500 decoration-4 rounded-lg' : 'bg-transparent'}`}>
                    Home
                </a>
                <a href="#" onClick={() => setView('about')} className={`p-2 ${view === 'about' ? 'underline decoration-green-500 decoration-4' : 'bg-transparent'}`}>
                    About
                </a>
                <a href="#" onClick={() => setView('projects')} className={`p-2 ${view === 'projects' ? 'underline decoration-green-500 decoration-4' : 'bg-transparent'}`}>
                    Projects
                </a>
                <a href="#" onClick={() => setView('contact')} className={`p-2 ${view === 'contact' ? 'underline decoration-green-500 decoration-4' : 'bg-transparent'}`}>
                    Contact
                </a>
            </nav>
            {renderContent()}
        </div>
    )
}

export default NavBar;