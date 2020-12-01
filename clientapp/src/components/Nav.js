import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare as github, faLinkedinIn as linkedin } from '@fortawesome/free-brands-svg-icons'

function Nav() {
    return (
        <div>
            <nav class="desktopNav">
                <ul class="initializeNav">
                    <li class="initializeButtons"><a href="#homeAnchor">Home</a></li>
                    <li class="initializeButtons"><a href="#projectAnchor">Projects</a></li>
                    <li class="initializeButtons"><a href="#contactAnchor">Contact</a></li>
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