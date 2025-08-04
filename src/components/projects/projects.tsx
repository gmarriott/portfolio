import React, { useState } from 'react';
import TutorfulLandingPage from "../../images/tutorful-landing-page.png";
import SpaceXViewer from "../../images/spacex-viewer.png";
import TruckRun from "../../images/truck-run.png";
import JobsVR from "../../images/dev-demand-vr.png";
import MovieSearchApp from "../../images/movie-search-app.png";

const projects = [
     {
        title: "Movie Search App",
        link: "https://gmarriott.github.io/movie-search/",
        linkText: "Movie Search App",
        description: (
            <>
                I enhanced my understanding of API usage by building a movie search app that fetches real-time data from The Movie Database (TMDb) API. Through implementing search functionality, dynamic routing, and data rendering, I gained hands-on experience with RESTful API integration in a front-end application. Check out the experience at: <a href="https://gmarriott.github.io/movie-search/" target="_blank" rel="noopener noreferrer">Movie Search App</a>
            </>
        ),
        shortDescription:"I enhanced my understanding of API usage by building a movie search app that fetches real-time data from The Movie Database (TMDb) API.",
        category: "API/Frontend Development",
        image: MovieSearchApp,
        alt: "movie-search-app-img"
    },
    {
        title: "Tutorful Landing Experience",
        link: "https://tutorful.co.uk/search/maths",
        linkText: "Tutorful - Landing Page",
        description: (
            <>
                While working at Tutorful, I was part of a small team tasked with optimising the landing page for the potential students to the platform. This involved rebuilding the existing landing page using Vue and Typescript to make the experience as smooth as possible. We also used Lighthouse whilst we rebuilt the page to ensure that we had optimised performance, accessibility and user experience stats for modern day browsers. Check out the landing page experience at: <a href="https://tutorful.co.uk/search/maths" target="_blank" rel="noopener noreferrer">Tutorful - Landing Page</a>
            </>
        ),
        shortDescription:"While working at Tutorful, I was part of a small team tasked with optimising the landing page for the potential students to the platform.",
        category: "Software Development",
        image: TutorfulLandingPage,
        alt: "arc"
    },
    {
        title: "SpaceX Launch Viewer",
        link: "https://gmarriott.github.io/space-x-launch-viewer/",
        linkText: "SpaceX Launch Viewer",
        description: (
            <>
                I started the SpaceX launch viewer project to refine my knowledge of React and Typescript. Using the open source SpaceX API was enjoyable and I managed to develop a satisfying list of launches with filter and sort functionality.<br /><br /> I have deployed the project to GitHub pages and you will be able to access it by using the following link: <a href="https://gmarriott.github.io/space-x-launch-viewer/" target="_blank" rel="noopener noreferrer">SpaceX Launch Viewer</a>
            </>
        ),
        shortDescription: "I started the SpaceX launch viewer project to refine my knowledge of React and Typescript.",
        category: "API Development",
        image: SpaceXViewer,
        alt: "spacex-viewer-img"
    },
    {
        title: "Truck Run",
        link: "https://gmarriott.github.io/truck-run/",
        linkText: "Truck Run",
        description: (
            <>
                This project was made while I was studying at Sheffield Hallam University as part of a 30 day Javascript challenge. On one of the days we were tasked with using JS alongside HTML canvas to create a game. I wanted to replicate the 2D side scrolling games I played when I was younger. Truck Run was my submission for the challenge and is just a simple 2D scroller where you drive a truck and try to get as far as possible without crashing. Access it by using the following link: <a href="https://gmarriott.github.io/truck-run/" target="_blank" rel="noopener noreferrer">Truck Run</a>
            </>
        ),
        shortDescription: "This project was made while I was studying at Sheffield Hallam University as part of a 30 day Javascript challenge.",
        category: "Game Development",
        image: TruckRun,
        alt: "truck-run-img"
    },
    {
        title: "VR - Learning the basics",
        link: "https://gmarriott.github.io/vr-uk-visualization/",
        linkText: "VR - Data Visualization",
        description: (
            <>
                After being gifted a Google Daydream View from a fellow developer I was excited by the possibilities of VR and how to develop for the platform. I have currently developed a view where data for developer demand can be displayed. Although some bugs still need to be fixed, it has been a valuable project for understanding the basics of VR development. For this project I utilised Javascript alongside A-Frame. A preview of the application can be found here:<br /> <a href="https://gmarriott.github.io/vr-uk-visualization/" target="_blank" rel="noopener noreferrer">VR - Data Visualization</a>
            </>
        ),
        shortDescription: "After being gifted a Google Daydream View from a fellow developer I was excited by the possibilities of VR and how to develop for the platform.",
        category: "VR Development",
        image: JobsVR,
        alt: "dev-demand-img"
    }
];

// Custom hook to detect mobile
function useIsMobile() {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 600);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return isMobile;
}

export default function Projects() {
    const [current, setCurrent] = useState(0);
    const isMobile = useIsMobile();

    const prevProject = () => setCurrent((current - 1 + projects.length) % projects.length);
    const nextProject = () => setCurrent((current + 1) % projects.length);

    const project = projects[current];

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Work.</h1>
                    <div
                        className="carousel-wrapper"
                        style={{
                            textAlign: 'center',
                            position: 'relative',
                            padding: isMobile ? '8px 0' : '32px 0'
                        }}
                    >
                        <button onClick={prevProject} style={{ position: 'absolute', left: 0, top: '50%' }} aria-label="Previous Project">&lt;</button>
                        <div className="portfolio-item" style={{ display: 'inline-block', width: isMobile ? '90%' : '60%' }}>
                            <div className="popup-modal">
                                <div className="description-box">
                                    <h4>{project.title}</h4>
                                    {isMobile ? (
                                        <div style={{ margin: '16px 0' }}>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkText}</a>
                                           <p style={{ textAlign: 'left' }}>{project.shortDescription}</p>
                                        </div>
                                    ) : (
                                        <p style={{ textAlign: 'left' }}>{project.description}</p>
                                    )}
                                    <span className="categories"><i className="fa fa-tag" />{project.category}</span>
                                    <img className="popup-img" src={project.image} alt={project.alt} style={{ maxWidth: '100%', marginTop: 16 }} />
                                </div>
                            </div>
                        </div>
                        <button onClick={nextProject} style={{ position: 'absolute', right: 0, top: '50%' }} aria-label="Next Project">&gt;</button>
                        <div style={{ marginTop: 16 }}>
                            {projects.map((_, idx) => (
                                <span
                                    key={idx}
                                    style={{
                                        display: 'inline-block',
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: idx === current ? '#333' : '#ccc',
                                        margin: '0 4px'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}