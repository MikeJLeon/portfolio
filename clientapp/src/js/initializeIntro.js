import { initialize } from "./initialize"
const videoStart = () => {
    let city = document.getElementById("cityVideo");
    let rain = document.getElementById("rainVideo");
    let tram = document.getElementById("tramVideo");
    city.addEventListener("ended", () => changeVideo("rainVideo"));
    rain.addEventListener("ended", () => changeVideo("tramVideo"));
    tram.addEventListener("ended", () => changeVideo("cityVideo"));
}

const fadeInIntro = () => {
    let videoContainer = document.getElementsByClassName("videoContainer")[0];
    setTimeout(() => {
        //videoContainer.classList.add("videoContainerFade");
        initialize();
    }, 500)
}

function changeVideo(next) {
    console.log(next);
    let element = document.getElementById(next);
    document.getElementsByClassName("activeVideo")[0].classList.remove("activeVideo");
    element.play();
    element.classList.add("activeVideo");
}

export { videoStart, fadeInIntro }