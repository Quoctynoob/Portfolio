import React from "react";

interface Image {
    imageSrc: string;
    link: string;
    text?: string;
    title: string;
    description: string;
}

const ProjectDisplay: React.FC<Image> = ({ imageSrc, link, text = "Image", title, description}) => {
    return (
        <div className="flex flex-col justify-center items-center h-auto w-auto bg-green-950 rounded-lg p-4 space-y-4">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imageSrc} alt={text} className="h-48 mt-1 rounded-lg shadow-lg hover:opacity-80 transition duration-300"/>
            </a>

            <div className="font-bold">{title}</div>

            <div className="m-4 w-full">
                <p className="text-center text-mintCream">{description}</p>
            </div>
        </div>
    );
};

export default ProjectDisplay;