import { useState } from "react";
import Typewriter from "../utilities/typeWriter";
import AboutPage from "./about";
import ContactPage from "./contact";
import ProjectsPage from "./projects";

const HomePage = () => {
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
        <div className="text-center">
            <Typewriter/>
            <h1 className="text-mintCream text-8xl">
                Quoc Le<span className="text-yellow-400">.</span>
            </h1>
            <p className="p-4 text-lg">
                Welcome to my page, feel free to read more 
                <a href="#" onClick={() => setView('about')}><span className="text-yellow-400"> about me</span></a>,<br></br>
                check out my ongoing and past <a href="#" onClick={() => setView('projects')}><span className="text-yellow-400">projects</span></a>,
                or <a href="#" onClick={() => setView('contact')}><span className="text-yellow-400">contact me</span></a>.
            </p>
            
        </div>
    )
}

export default HomePage;