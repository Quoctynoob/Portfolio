import ProjectDisplay from "../projects/projectsDisplay";


const ProjectsPage = () => {
    return (
        <div className="ml-24 mr-24 fade-in-up">
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
        </div>
    )
}

export default ProjectsPage;