import { useEffect, useRef } from "react";
import Info from "./info";
import ComputerSkill from "./computerSkill";

const Stats = () => {
    const infoRef = useRef<HTMLDivElement>(null);
    const computerSkillRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === infoRef.current) {
                        entry.target.classList.add('slide-in-left');
                    } else if (entry.target === computerSkillRef.current) {
                        entry.target.classList.add('slide-in-right');

                        const children = entry.target.querySelectorAll('.staggered-fade');
                        children.forEach((child, index) => {
                            (child as HTMLElement).style.animationDelay = `${index * 0.2}s`;
                            (child as HTMLElement).classList.add('fadeIn');
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1,
        });

        if (infoRef.current) {
            observer.observe(infoRef.current);
        }
        if (computerSkillRef.current) {
            observer.observe(computerSkillRef.current);
        }

        return () => {
            if (infoRef.current) {
                observer.unobserve(infoRef.current);
            }
            if (computerSkillRef.current) {
                observer.unobserve(computerSkillRef.current);
            }
        };
    }, []);

    return (
        <div className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center px-20 text-darkMint">
            <div ref={infoRef} className="w-1/2">
                <Info />
            </div>

            <div ref={computerSkillRef} className="w-1/2 pt-5">
                <ComputerSkill />
            </div>
        </div>
    );
}

export default Stats;
