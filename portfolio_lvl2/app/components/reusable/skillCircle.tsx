// src/components/svg/SkillCircle.tsx
import React from "react";

interface SkillCircleProps {
  percent: number;
  circumference: number;
}

function SkillCircle({ percent, circumference }: SkillCircleProps) {
  return (
    <>
      <circle
        cx="145"
        cy="145"
        r="120"
        stroke="currentColor"
        strokeWidth="45"
        fill="transparent"
        className="text-darkMint"
      />
      <circle
        cx="145"
        cy="145"
        r="120"
        stroke="currentColor"
        strokeWidth="46"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={
          circumference - (percent / 100) * circumference
        }
        strokeLinecap="round"
        className="text-warmOrange"
      />
    </>
  );
}

export default SkillCircle;
