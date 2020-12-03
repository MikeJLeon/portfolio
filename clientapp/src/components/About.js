import Arrow from "./Arrow";
import me from "../img/meEdited.jpg"

function About() {
    return (
        <div id="aboutContainer" class="aboutContainer">
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
            <Arrow nextPage="contactContainer" activeLink="contactlink"/>
        </div>
    )
}

export default About;