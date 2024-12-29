import ProjectDisplay from "../projects/projectsDisplay";


const ProjectsPage = () => {
    return (
        
        <div className="ml-24 mr-24 fade-in-up">
            <h1 className="text-center">
                Projects
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <ProjectDisplay
                    imageSrc="/images/tennisproject.jpg"
                    link="https://tennis-locator.vercel.app/"
                    text="Tennis Project"
                />

                <ProjectDisplay
                    imageSrc="/images/restaurantproject.jpg"
                    link="https://quoctynoob.github.io/Me-s-restaurant/"
                    text="Online Menu"
                />

                <ProjectDisplay
                    imageSrc="/images/firebaseproject.jpg"
                    link="https://quoctynoob.github.io/LearnWithFirebase/"
                    text="Todo-list"
                />

                <ProjectDisplay
                    imageSrc="/images/webproject.jpg"
                    link="https://quoctynoob.github.io/LearnTheWebBasics/"
                    text="Jokes and Weather API"
                />
            </div>
        </div>
    )
}

export default ProjectsPage;