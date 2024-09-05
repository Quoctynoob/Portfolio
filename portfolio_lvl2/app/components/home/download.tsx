import React from 'react';

const Resume = () => {
    const handleDownload = () => {
        const filePath = '/resume.pdf';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <button className="button-resume" onClick={handleDownload}>
            Download Resume
        </button>
    );
};

export default Resume;
