import { useState } from "react";
import Typewriter from "../utilities/typeWriter";
import AboutPage from "./about";
import ContactPage from "./contact";
import ProjectsPage from "./projects";
import Resume from "../utilities/download";

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
            <h1 className="text-mintCream text-8xl font-pacifico">
                Quoc Le<span className="text-yellow-400">.</span>
            </h1>
            <p className="p-9 text-lg">
                Welcome to my page, feel free to read more
                <a href="#" onClick={() => setView('about')} className="text-yellow-400 hover:bg-orange-500 hover:text-white transition-colors duration-300">about me</a>,<br></br>
                check out my ongoing and past <a href="#" onClick={() => setView('projects')}><span className="text-yellow-400">projects</span></a>,
                or <a href="#" onClick={() => setView('contact')}><span className="text-yellow-400">contact me</span></a>.
            </p>
            
            <Resume/>
        </div>
    )
}

export default HomePage;