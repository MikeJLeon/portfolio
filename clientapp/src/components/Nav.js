import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare as github, faLinkedinIn as linkedin } from '@fortawesome/free-brands-svg-icons'
import {scroll} from "../js/scroll";

function Nav() {
    return (
        <div>
            <nav class="desktopNav">
                <ul class="initializeNav">
                    <li id="homelink" class="initializeButtons shaky linkButton activeLink" onClick={() => scroll("homeContainer", "homelink")}>Home</li>
                    <li id="projectslink" class="initializeButtons shaky linkButton" onClick={() => scroll("projectsContainer", "projectslink")}>Projects</li>
                    <li id="aboutlink" class="initializeButtons shaky linkButton" onClick={() => scroll("aboutContainer", "aboutlink")}>About</li>
                    <li id="contactlink" class="initializeButtons shaky linkButton" onClick={() => scroll("contactContainer", "contactlink")}>Contact</li>
                    <li class="initializeButtons shaky">
                        <a href="/other/Mike_Leon_Resume_07152020.pdf" download>Resume</a>
                    </li>
                    <li class="initializeButtons shaky">
                        <a href="https://github.com/MikeJLeon" target="_blank">
                            <FontAwesomeIcon icon={github} /></a>
                    </li>
                    <li class="initializeButtons shaky">
                        <a href="https://www.linkedin.com/in/mikejleon" target="_blank">
                            <FontAwesomeIcon icon={linkedin} /></a>
                    </li>
                </ul>
            </nav>
            <nav class="mobileNav">
                <ul id="leftNav">
                    <li class="initializeButtons shaky">
                        <a href="/other/Mike_Leon_Resume_07152020.pdf" download>Resume</a>
                    </li>
                    <li class="initializeButtons shaky">
                        <a href="https://github.com/MikeJLeon" target="_blank">
                            <FontAwesomeIcon icon={github} /></a>
                    </li>
                    <li class="initializeButtons shaky">
                        <a href="https://www.linkedin.com/in/mikejleon" target="_blank">
                            <FontAwesomeIcon icon={linkedin} /></a>
                    </li>
                </ul>
                <i id="rightNav" class="fa fa-bars" aria-hidden="true"> </i>
            </nav>
            <nav class="mobileHam">
                <ul class="hamNav">
                    <li><a href="#homeAnchor">Home</a></li>
                    <li><a href="#projectAnchor">Projects</a></li>
                    <li><a href="#contactAnchor">Contact</a></li>
                </ul>
            </nav></div>
    )
}

export default Nav;