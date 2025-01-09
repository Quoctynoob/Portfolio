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
                    imageSrc=""
                    link="https://github.com/Quoctynoob/Stock-Portfolio-Management"
                    text="Command Line Stock Portfolio Management"
                    description="A stock portfolio application built in Java, showcasing object-oriented programming principles 
                    like inheritance, polymorphism, encapsulation, and abstraction. It features a responsive and user-friendly 
                    GUI created with Java Swing for displaying stock data and portfolio details. The application supports 
                    persistent data storage using both databases and file-based solutions for flexibility. Currently, I'm 
                    enhancing it by integrating real-time stock data retrieval via external APIs to improve functionality and 
                    user experience"
                />

                <ProjectDisplay
                    imageSrc="/images/firebaseproject.jpg"
                    link="https://quoctynoob.github.io/LearnWithFirebase/"
                    text="Todo-list"
                    description="A to-do list application designed with simplicity in mind, it uses Firebase for secure Google 
                    sign-ins and real-time task storage through its NoSQL database. The app is deployed on GitHub Pages, making 
                    it easily accessible. Through this project, I gained practical experience with Firebase's key features like 
                    authentication, database integration, and deployment."
                />

                <ProjectDisplay
                    imageSrc="/images/webproject.jpg"
                    link="https://quoctynoob.github.io/LearnTheWebBasics/"
                    text="Jokes and Weather API"
                    description="Designed and developed a straightforward website to gain practical experience 
                    with API integration. The project utilizes vanilla HTML, CSS, and JavaScript to fetch and display data dynamically 
                    from multiple APIs. With a clean and functional layout, the website focuses on usability and simplicity. 
                    It is hosted on GitHub for easy access and review of the code."
                />
            </div>
        </div>
    )
}

export default ProjectsPage;