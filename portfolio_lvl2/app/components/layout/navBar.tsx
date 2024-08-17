import React, { useState } from "react";

import AboutPage from "../tabs/about";
import HomePage from "../tabs/home";
import ProjectsPage from "../tabs/projects";

const NavBar = () => {
    const [view, setView] = useState<string>('home');
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);

    const getUnderlineClass = (tab: string) => {
        if (hoveredTab && hoveredTab !== tab) return 'w-0';
        return view === tab || hoveredTab === tab ? 'w-full' : 'w-0';
    };
    
    

    const renderContent = () => {
        switch (view) {
            case 'about':
                return <AboutPage/>
            case 'projects':
                return <ProjectsPage/>
            default:
                return <HomePage/>
        }
    }
    
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="flex justify-between items-center bg-darkMint p-4 text-mintCream">
                {/*NavBar*/}
                <div className="flex gap-2 font-semibold">
                    <a className="p-2 px-4 group" href="#" onClick={() => setView('home')} onMouseEnter={() => setHoveredTab('home')} onMouseLeave={() => setHoveredTab(null)}>
                        Quoc Le
                        <div className={`bg-teal-500 h-[4px] ${getUnderlineClass('home')} transition-all duration-500 rounded-sm`}></div>
                    </a>

                    <a className="p-2 px-4 group" href="#" onClick={() => setView('about')} onMouseEnter={() => setHoveredTab('about')} onMouseLeave={() => setHoveredTab(null)}>
                        About
                        <div className={`bg-teal-500 h-[4px] ${getUnderlineClass('about')} transition-all duration-500 rounded-sm`}></div>
                    </a>

                    <a className="p-2 px-4 group" href="#"  onClick={() => setView('projects')} onMouseEnter={() => setHoveredTab('projects')} onMouseLeave={() => setHoveredTab(null)}>
                        Projects
                        <div className={`bg-teal-500 h-[4px] ${getUnderlineClass('projects')} transition-all duration-500 rounded-sm`}></div>
                    </a>

                    
                </div>

                <div className="ml-auto flex items-center gap-4 ">
                    <a href="https://www.linkedin.com/in/quoc-van-tilburg-le-293333294/" className="px-4 py-2">
                        <img src="icons/linkedin.svg" className="w-6 h-6" alt="Linkedin"/>
                    </a>

                    <a href="https://github.com/Quoctynoob" className="px-4 py-2">
                        <img src="icons/github.svg" className="w-6 h-6" alt="Github"/>
                    </a>

                    <a href="https://www.instagram.com/tilburgquoc/" className="px-4 py-2">
                        <img src="icons/instagram.svg" className="w-6 h-6" alt="Instagram"/>
                    </a>

                    <a href="mailto:tilburgquoc34@gmail.com" className="px-4 py-2">
                        <img src="icons/mail.svg" className="w-6 h-6" alt="Mail"/>
                    </a>
                </div>
            </nav>

            <main className="flex-grow text-mintCream">
                {renderContent()}
            </main>
        </div>
    )
}

export default NavBar;