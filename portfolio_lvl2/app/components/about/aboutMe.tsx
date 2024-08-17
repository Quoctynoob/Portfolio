const AboutMe = () => {
    return (
        <div className="h-screen flex items-center px-20 py-10">
            <div className="w-1/2 relative flex justify-center items-center">
                {/* Geometric shapes */}
                <div className="absolute w-40 h-40 bg-yellow-600 bottom-20 -left-20 z-10"></div>
                <div className="absolute w-60 h-56 bg-darkOrange -bottom-14 left-6 z-0"></div>

                {/* Profile Picture */}
                <img
                    src="/images/quoc.jpg"
                    alt="profile picture"
                    className="relative z-30 w-80 h-full object-cover rounded-lg shadow-2xl"
                />
            </div>
            <div className="w-1/2">
                <h1 className="text-6xl font-bold text-green-500">
                    About <span className="text-green-200">Me</span>.
                </h1>
                <p className="mt-4 text-lg">
                    I'm a computer science student at the University of Guelph with a strong passion for full-stack
                    development, particularly enjoying back-end work. My academic journey has equipped me with a solid
                    foundation in algorithms, data structures, and software engineering principles. I've worked on several
                    projects, including developing web applications using technologies like React, Node.js, and HTML/CSS.
                    Currently, I'm working on an exciting game project using Java, which has allowed me to deepen my
                    understanding of object-oriented programming and game design.
                    <br/><br/>
                    Outside of academics and coding, I'm an avid tennis player and enjoy other racket sports as well, which
                    keep me active and disciplined. I also love watching anime, which has sparked my interest in Japanese
                    culture.
                    <br/><br/>
                    I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity
                    that matches my skills and experience, don't hesitate to contact me.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
