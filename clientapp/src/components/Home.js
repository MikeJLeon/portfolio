import city from "../video/city.mp4";
import rain from "../video/rain.mp4";
import tram from "../video/tram.mp4";
import Arrow from "./Arrow";
import { videoStart, fadeInIntro } from "../js/initializeIntro.js";
function Home() {
    window.onload = () => {
        videoStart();
        fadeInIntro();
    }
    return (
        <div id="homeContainer" className="homeContainer">
            <main>
                <section className="initialize show" id="intro">
                    <div className="videoContainer">
                        <video className="activeVideo" autoPlay muted id="cityVideo">
                            <source src={city} type="video/mp4" />
                        </video>
                        <video className="" muted id="rainVideo">
                            <source src={rain} type="video/mp4" />
                        </video>
                        <video className="" muted id="tramVideo">
                            <source src={tram} type="video/mp4" />
                        </video>
                        <div className="videoOverlay"></div>
                    </div>
                    <h1 className="name"></h1>
                    <p className="introTitle hiddenIntro">Software Developer</p>
                    <p className="introSummary hiddenIntro">
                        Full-stack application developer with experience using popular
                        front-end and back-end frameworks such as ReactJS and ExpressJS.
                        Proven ability to create full-stack applications with efficient and
                        thoughtfully designed data storage and clean, modern UIs. Always
                        exploring and learning new technologies.</p>
                    <Arrow nextPage="projectsContainer" activeLink="projectslink"/>
                </section>
            </main>
        </div>
    );
}

export default Home;