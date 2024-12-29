import React from "react";

interface Image {
    imageSrc: string;
    link: string;
    text?: string;
}

const ProjectDisplay: React.FC<Image> = ({ imageSrc, link, text = "Image"}) => {
    return (
        <div className="flex justify-center items-center h-48px w-auto bg-darkMint">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img
            src={imageSrc}
            alt={text}
            className="rounded-lg shadow-lg hover:opacity-80 transition duration-300"
            />
        </a>
        </div>
    );
};

export default ProjectDisplay;