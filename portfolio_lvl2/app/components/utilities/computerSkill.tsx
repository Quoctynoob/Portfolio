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
    <div className="text-darkMint place-content-center p-6">    
        <p className="font-train text-7xl">COMPUTER</p>
        <p className="font-bold text-8xl ">SKILLS</p>
        <hr className="my-2 border-t-8 border-darkMint" />

        <section className="flex flex-col items-center">
            <div className="space-y-4 w-full">
            {skills.map((skill) => (
              <div key={skill.title} className="w-full">
              <button
                onClick={() => setCurrentSkill(skill)}
                className={`transition-colors duration-500 px-4 py-2 text-xl text-darkMint bg-accent 
                  w-full hover:bg-slate-400 font-semibold ${
                    currentSkill.title === skill.title
                      ? ""
                      : ""
                  }`}
              >
                {skill.title}
              </button>
              <hr className="my-2 border-t-4 border-darkMint"/>
            </div>
            ))}
            </div>

            <div className="relative flex items-center justify-center mt-4">
                <svg className="transform -rotate-90 w-72 h-72 mt-5">
                    <SkillCircle percent={currentSkill.percent} circumference={circumference}/>
                </svg>
                <span className="absolute text-5xl font-bold">{`${currentSkill.percent}%`}</span>
            </div>
      </section>
    </div>
  );
}

export default SkillDisplay;
