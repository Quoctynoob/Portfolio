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
        strokeWidth="30"
        fill="transparent"
        className="text-mintCream"
      />
      <circle
        cx="145"
        cy="145"
        r="120"
        stroke="currentColor"
        strokeWidth="30"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={
          circumference - (percent / 100) * circumference
        }
        className="text-green-700"
      />
    </>
  );
}

export default SkillCircle;
