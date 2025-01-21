import ProjectDisplay from "../projects/projectsDisplay";


const ProjectsPage = () => {
    return (
        
        <div className="ml-44 mr-44 fade-in-up">
            <h1 className="text-5xl font-bold text-center text-green-200 mb-5">
                Projects<span className="text-green-500">.</span>
            </h1>
            <div className="grid grid-cols-3 gap-6">
                <ProjectDisplay 
                    imageSrc="/images/tennisproject.jpg"
                    link="https://tennis-locator.vercel.app/"
                    text="Tennis Project"
                    title="Tennis Locator"
                    description="A tennis app with login homepage and allows you to locate courts"
                />

                <ProjectDisplay
                    imageSrc="/images/restaurantproject.jpg"
                    link="https://quoctynoob.github.io/Me-s-restaurant/"
                    text="Online Menu"
                    title="Me's Restaurant"
                    description="a simple and responsive online menu"
                />

                <ProjectDisplay
                    imageSrc="/images/ePortfolio.png"
                    link="https://github.com/Quoctynoob/Stock-Portfolio-Management"
                    text="Command Line Stock Portfolio Management"
                    title="Stock Portfolio Management"
                    description="a command line stock portfolio, currently transitioning to a website"
                />

                <ProjectDisplay
                    imageSrc="/images/firebaseproject.jpg"
                    link="https://quoctynoob.github.io/LearnWithFirebase/"
                    text="Todo-list"
                    title="Todo-list"
                    description="a simple website to practice with Firebase using todo-list"
                />

                <ProjectDisplay
                    imageSrc="/images/webproject.jpg"
                    link="https://quoctynoob.github.io/LearnTheWebBasics/"
                    text="Jokes and Weather API"
                    title="Jokes and Weather API"
                    description="A simple website to practice with APIs"
                />
            </div>
        </div>
    )
}

export default ProjectsPage;