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
    let hello = document.getElementsByClassName("helloInitial")[0];
    let description = document.getElementsByClassName("descriptionInitial")[0];
    let videoContainer = document.getElementsByClassName("videoContainer")[0];
    let welcomeContainer = document.getElementsByClassName("welcomeContainer")[0];
    setTimeout(() => {
        hello.classList.remove("helloInitial");
        setTimeout(() => {
            description.classList.remove("descriptionInitial");
            setTimeout(() =>{
                hello.classList.add("helloInitial");
                description.classList.add("descriptionInitial");
                videoContainer.classList.add("videoContainerFade");
                welcomeContainer.classList.add("videoContainerFade");
                initialize();
            }, 500)
        }, 500)
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