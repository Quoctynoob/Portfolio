import React, { useState } from "react";
import SkillCircle from "../reusable/skillCircle";

interface Skill {
  title: string;
  percent: number;
}

function SkillDisplay() {
  const skills: Skill[] = [
    { title: "HTML + CSS", percent: 75 },
    { title: "Java", percent: 75 },
    { title: "Python", percent: 75 },
    { title: "JavaScript", percent: 70 },
    { title: "SQL", percent: 80 },
    { title: "C", percent: 65 },
  ];

  const [currentSkill, setCurrentSkill] = useState<Skill>(skills[0]);

  const circumference = 2 * Math.PI * 120;

  return (
    <div className="text-mintCream">
        <p>COMPUTER</p>
        <p>SKILLS</p>
        <section className="p-6 space-y-6 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
            <div className="grid grid-cols-2 gap-6">
            {skills.map((skill) => (
                <button
                key={skill.title}
                onClick={() => setCurrentSkill(skill)}
                className={`transition-colors duration-500 px-4 py-2 text-xl text-darkMint bg-accent rounded-md h-14 w-44 hover:bg-green-400 ${
                    currentSkill.title === skill.title
                    ? "font-bold ring-2 ring-accent"
                    : ""
                }`}
                >
                {skill.title}
                </button>
            ))}
            </div>

            <div className="relative flex items-center justify-center">
                <svg className="transform -rotate-90 w-72 h-72">
                    <SkillCircle percent={currentSkill.percent} circumference={circumference}/>
                </svg>
                <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span>
            </div>
      </section>
    </div>
  );
}

export default SkillDisplay;
