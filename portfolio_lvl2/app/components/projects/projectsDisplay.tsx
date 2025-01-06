import React from "react";

interface Image {
    imageSrc: string;
    link: string;
    text?: string;
    description: string;
}

const ProjectDisplay: React.FC<Image> = ({ imageSrc, link, text = "Image", description}) => {
    return (
        <div className="flex flex-col justify-center items-center h-48px w-auto bg-green-950 rounded-lg">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                src={imageSrc}
                alt={text}
                className="rounded-lg shadow-lg hover:opacity-80 transition duration-300"
                />
            </a>
            <div className="mt-4 w-full">
                    <p className="text-center text-mintCream">{description}</p>
            </div>
        </div>
    );
};

export default ProjectDisplay;