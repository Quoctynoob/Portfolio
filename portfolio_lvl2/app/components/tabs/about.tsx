import { useEffect, useRef } from "react";
import AboutMe from "../about/aboutMe";
import Stats from "../about/stats";

const AboutPage = () => {
    const aboutPageRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (entries: IntersectionObserverEntry[]) => {
            const entry = entries[0];
            if (aboutPageRef.current) {
                if (entry.isIntersecting) {
                    aboutPageRef.current.classList.remove('bg-darkMint');
                    aboutPageRef.current.classList.add('bg-darkOrange');
                } else {
                    aboutPageRef.current.classList.remove('bg-darkOrange');
                    aboutPageRef.current.classList.add('bg-darkMint');
                }
            }
        };

        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1,
        });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <div ref={aboutPageRef} className="transition-colors duration-500 bg-darkMint">
            <AboutMe />
            <div ref={statsRef}>
                <Stats />
            </div>
        </div>
    );
};

export default AboutPage;
