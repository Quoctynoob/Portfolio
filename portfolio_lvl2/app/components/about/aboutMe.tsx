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
                    Hi there, I'm Quoc, but you can call me Leon! I'm a Computer Science and Geomatics student at the 
                    University of Guelph.
                    I'm super into programming and tennis. Game development and API design are some of my favorite areas to explore.
                    <br/><br/>
                    When I'm not at my computer, you'll probably find me playing tennis, badminton, TFT, or coming up with ideas 
                    for new projects. I love creating cool and useful projects that make everyday life easier.
                    <br/><br/>
                    I'm actively seeking job opportunities where I can contribute, learn, and grow as a developer. 
                    If you have an opportunity that could benefit from my skills and enthusiasm, I'd love to connect!
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
