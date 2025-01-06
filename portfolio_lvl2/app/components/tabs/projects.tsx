import ProjectDisplay from "../projects/projectsDisplay";


const ProjectsPage = () => {
    return (
        
        <div className="ml-44 mr-44 fade-in-up">
            <h1 className="text-5xl font-bold text-center text-green-200 mb-5">
                Projects<span className="text-green-500">.</span>
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <ProjectDisplay 
                    imageSrc="/images/tennisproject.jpg"
                    link="https://tennis-locator.vercel.app/"
                    text="Tennis Project"
                    description="Tennis Locator is a full-stack web application built using React, TypeScript, and Firebase, 
                    designed to make finding and favoriting tennis courts quick and easy. The app features secure user 
                    authentication and real-time data management, powered by Firebase Authentication and Firestore, 
                    including support for social logins. With a responsive ui styled using Tailwind CSS, the platform offers 
                    a consistent experience across all devices. Navigation is optimized with React Router and Next.js, 
                    incorporating server-side rendering and dynamic routing for improved performance and user experience"
                />

                <ProjectDisplay
                    imageSrc="/images/restaurantproject.jpg"
                    link="https://quoctynoob.github.io/Me-s-restaurant/"
                    text="Online Menu"
                    description="This is a fully responsive website designed and developed using Vanilla HTML, CSS, and JavaScript, 
                    providing an intuitive and user-friendly navigation experience. The site features a clean and modern design, 
                    with responsiveness across all devices. Applying JavaScript for dynamic functionality and HTML/CSS for 
                    obust structure and styling, the menu offers an engaging and accessible experience. 
                    The project is hosted on GitHub, allowing easy access and showcasing the implementation of interactive web 
                    design principles."
                />

                <ProjectDisplay
                    imageSrc="/images/firebaseproject.jpg"
                    link="https://quoctynoob.github.io/LearnWithFirebase/"
                    text="Todo-list"
                    description="How Bout htis"
                />

                <ProjectDisplay
                    imageSrc="/images/webproject.jpg"
                    link="https://quoctynoob.github.io/LearnTheWebBasics/"
                    text="Jokes and Weather API"
                    description="Testujng"
                />
            </div>
        </div>
    )
}

export default ProjectsPage;