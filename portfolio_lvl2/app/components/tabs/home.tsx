import Typewriter from "../home/typeWriter";
import Resume from "../home/download";

const HomePage = () => {
    return (
        <div className="text-center">
            <div className="staggered-fade">
                <Typewriter />
            </div>
            <h1 className="text-mintCream text-8xl font-pacifico staggered-fade">
                Quoc Le<span className="text-yellow-400">.</span>
            </h1>
            <p className="p-9 text-lg staggered-fade">
                Welcome to my page, feel free to read more <a href="#" className="text-yellow-400 hover:bg-orange-500 hover:text-mintCream transition-colors duration-300">about me</a>,<br />
                check out my ongoing and past <a href="#" className="text-yellow-400 hover:bg-orange-500 hover:text-mintCream 
                transition-colors duration-300">projects</a>,
                or <a href="#" className="text-yellow-400 hover:bg-orange-500 hover:text-mintCream transition-colors duration-300">
                    contact me</a>.
            </p>
            <div className="staggered-fade">
                <Resume />
            </div>
        </div>
    );
}

export default HomePage;
