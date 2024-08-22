const AboutMe = () => {
    return (
        <div className="h-screen flex items-center px-20 py-10">
            <div className="w-1/2 relative flex justify-center items-center">
                {/* Geometric shapes */}
                <div className="absolute w-40 h-40 bg-yellow-600 bottom-20 -left-20 z-10"></div>
                <div className="absolute w-60 h-56 bg-darkOrange -bottom-14 left-6 z-0"></div>

                {/* Profile Picture */}
                <img src='/images/profilePics.JPG' alt="profile picture" 
                className="relative z-30 w-80 h-full object-cover rounded-lg shadow-2xl"/>
            </div>
            <div className="w-1/2">
                <h1 className="text-6xl font-bold text-green-500">
                    About <span className="text-green-200">Me</span>.
                </h1>
                <p className="mt-4 text-lg">
                    Hi there! I'm a computer science student at the University of Guelph with a deep passion for full-stack 
                    development. Throughout my academic journey, I've built a strong foundation in algorithms, 
                    data structures, and software engineering principles, which I continuously apply to my projects.
                    <br/><br/>
                    Currently, I'm collaborating on an exciting game development project, where I'm sharpening my skills 
                    and learning the intricacies of game design and development.
                    <br/><br/>
                    Beyond the world of coding, I'm an avid tennis player and enjoy other racket sports, which keep me 
                    active, focused, and disciplined.
                    <br/><br/>
                    I'm actively seeking job opportunities where I can contribute, learn, and grow as a developer. 
                    If you have an opportunity that could benefit from my skills and enthusiasm, I'd love to connect!
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
