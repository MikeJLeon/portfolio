import '../styles/Home.css';
//import '../js/initialize';
import me from "../img/meEdited.jpg"

function Home() {
    return (
        <div className="homeContainer">
            <main>
                <section className="initialize show" id="intro">
                    <h1 className="name"></h1>
                    <p className="introTitle hiddenIntro">Software Developer</p>
                    <p className="introSummary hiddenIntro">
                        Full-stack application developer with experience using popular
                        front-end and back-end frameworks such as ReactJS and ExpressJS.
                        Proven ability to create full-stack applications with efficient and
                        thoughtfully designed data storage and clean, modern UIs. Always
                        exploring and learning new technologies.
          </p>
                </section>
                <div className="anchor" id="aboutAnchor"></div>
                <section className="hidden show" id="about">
                    <h1>About</h1>
                    <div id="aboutContent">
                        <p>
                            Hi! I am Michael, I've started my journey as a software developer
                            back in 2018. I enjoy casting a wide net into many technologies
                            but my focus recently has been HTML JavaScript and CSS. Outside of
                            coding I enjoy gaming and going on small adventures with my dogs
                            and recently have picked up working on my health.
            </p>
                        <img src={me} />
                    </div>
                </section>
                <div className="anchor" id="projectAnchor"></div>
                <section className="hidden show" id="projects">
                    <h1>Projects</h1>
                    <div className="workContainer">
                        <div className="workTitle"><p>Professional Work</p></div>
                        <div className="projects">
                            <div className="projectContainer" id="jmtint">
                                <div className="projectHeaderContainer">
                                    <p className="projectHeader">JeffreyM Consulting</p>
                                </div>
                                <div className="projectContent">
                                    <p>
                                        Starting out as a freelancer, I helped create the new
                                        website for JeffreyM Consulting. I created the website
                                        following a strict design doc while working with the graphic
                                        designer and another developer. Later on after completition
                                        I was asked if I could continue developing on the site when
                                        ever it is required.
                  </p>
                                    <p>Html, CSS, JavaScript, WordPress</p>
                                </div>
                                <div className="buttonContainer">
                                    <a href="http://www.jeffreym.com" target="_blank">
                                        <div className="siteButton">SITE</div>
                                    </a>
                                    <a href="jeffreyM.html" target="_blank">
                                        <div className="infoButton">
                                            Info
                    </div>
                                    </a>
                                </div>
                                <img src="../img/jeffreym.jpg" />
                            </div>
                            <div className="projectContainer" id="bbtint">
                                <div className="projectHeaderContainer">
                                    <p className="projectHeader">Ben Bridge Jeweler</p>
                                </div>
                                <div className="projectContent">
                                    <p>
                                        Hired as a web developer intern. I was tasked to fix bugs
                                        found on the website, document components that were not
                                        already recorded, complete tickets found in Jira, worked on
                                        a internal nodejs project to create html documents to add to
                                        salesforce.
                  </p>
                                    <p>
                                        HTML CSS JavaScript MySQL
                  </p>
                                </div>
                                <div className="buttonContainer">
                                    <a href="http://www.benbridge.com" target="_blank">
                                        <div className="siteButton">
                                            SITE
                    </div>
                                    </a>
                                    <a href="" target="_blank">
                                        <div className="infoButton">
                                            INFO
                    </div>
                                    </a>
                                </div>
                                <img src="../img/benbridge.jpg" />
                            </div>
                            <div className="projectContainer" id="sampleTint">
                                <div className="projectHeaderContainer">
                                    <p className="projectHeader">Awesome Project</p>
                                </div>
                                <div className="projectContent">
                                    <p>
                                        What a cool project, I've made the big bucks.
                  </p>
                                    <p>
                                        HTML CSS C# MYSQL
                  </p>
                                </div>
                                <div className="buttonContainer">
                                    <a href="" target="_blank">
                                        <div className="siteButton">
                                            SITE
                    </div>
                                    </a>
                                    <a href="" target="_blank">
                                        <div className="infoButton">
                                            INFO
                    </div>
                                    </a>
                                </div>
                                <img src="../img/jeffreym.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="workContainer">
                        <div className="workTitle"><p>Personal Work</p></div>
                        <div className="projects">
                            <div className="projectContainer" id="sampleTint">
                                <div className="projectHeaderContainer">
                                    <p className="projectHeader">Awesome Project</p>
                                </div>
                                <div className="projectContent">
                                    <p>
                                        What a cool project, I've made the big bucks.
                  </p>
                                    <p>
                                        HTML CSS C# MYSQL
                  </p>
                                </div>
                                <div className="buttonContainer">
                                    <a href="" target="_blank">
                                        <div className="siteButton">
                                            SITE
                    </div>
                                    </a>
                                    <a href="" target="_blank">
                                        <div className="infoButton">
                                            INFO
                    </div>
                                    </a>
                                </div>
                                <img src="img/jeffreym.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="anchor" id="contactAnchor"></div>
                <section className="hidden show" id="contact">
                    <h1>Get in touch</h1>
                    <form action="mailto:michael@michaeljleon.com">
                        <p>
                            As of 07/15/2020 I am looking for new opportunities. I currently
                            work for JeffreyM part-time and seeking any full-time
                            opportunities. If you like what you see, feel free to reach out
                            through email by clicking the button below! :)
            </p>
                        <input id="submit" type="submit" value="Send Email" />
                    </form>
                </section>
                <section className="hidden show" id="resume">
                    <h1>Download my Resume</h1>
                    <a href="/other/Mike_Leon_Resume_07152020.pdf" download
                    ><i className="fas fa-file"></i
                    ></a>
                </section>
            </main>
        </div>
    );
}

export default Home;