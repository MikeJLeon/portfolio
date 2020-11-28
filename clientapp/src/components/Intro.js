import city from "../video/city.mp4";
import rain from "../video/rain.mp4";
import tram from "../video/tram.mp4";
import { videoStart, fadeInIntro } from "../js/initializeIntro.js";
import Nav from "./Nav";
import Home from "./Home";

import "../styles/Intro.css";

function Intro() {
    window.onload = () => {
        videoStart();
        fadeInIntro();
    }
    return (
        <div className="introContainer">
            <div className="videoContainer">
                <video className="activeVideo" autoPlay muted id="cityVideo">
                    <source src={city} type="video/mp4" />
                </video>
                <video className="" muted id="rainVideo">
                    <source src={rain} type="video/mp4" />
                </video>
                <video className="" muted id="tramVideo">
                    <source src={tram} type="video/mp4" />
                </video></div>
            <div className="welcomeContainer">
                <div id="hello" className="helloInitial">Hello!</div>
                <div id="description" className="descriptionInitial">I am Michael Leon, welcome to the portfolio!</div>
            </div>
            <Nav/>
            <Home/>
        </div>
    )
}
export default Intro;