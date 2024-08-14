import React, { useState } from "react";


import AboutPage from "@/pages/about";
import IndexPage from "@/pages";
import ProjectsPage from "@/pages/projects";
import ContactPage from "@/pages/contact";

const NavBar = () => {
    const [view, setView] = useState<string>('home');


    const renderContent = () => {
        switch (view) {
            case 'about':
                return <AboutPage/>
            case 'projects':
                return 
        }
    }
    return (
        <div>
            <nav>

            </nav>
        </div>
    )
}

export default NavBar;