//https://colorhunt.co/palette/180289
function scrollArrowBig() {
    let arrow = document.getElementsByClassName("scrollArrow")[0];
    arrow.classList.add("scrollArrowAnimation");
    window.setTimeout(function () {
      arrow.classList.remove("scrollArrowAnimation");
    }, 500);
    return;
  }
  function show(){
    let elements = document.getElementsByClassName("hidden");
    if(elements.length === 0){
      window.removeEventListener('scroll', show);
    }
    let old = [...elements];
    for(let element in old){
      let windowHeight = window.innerHeight;
      let revealertop = old[element].getBoundingClientRect().top;
      if(revealertop - 100 <= windowHeight){
        old[element].classList.remove("hidden");
      }
    }
  }
  const initialize = () =>{
    let name = "Michael Leon";
    let current = 100;
    for(let chara of name){
      window.setTimeout(typeLetters.bind(chara), current);
      current += 100;
    }
    let intro = document.getElementsByClassName("hiddenIntro");
    let introElements = [...intro];
    current = 1000;
    for(let element of introElements){
      window.setTimeout(showintro.bind(element), current);
    }
    let videoContainer = document.getElementsByClassName("videoContainer")[0];
    setTimeout(() => {
      videoContainer.classList.add("videoContainerShrink");
    }, current)
    current = 0;

    let arrow = document.getElementsByClassName("arrow")[0];
    setInterval(()=>{
      arrow.classList.add("arrowBreath");
      setTimeout(()=>{
        arrow.classList.remove("arrowBreath");
      }, 2000)
    }, 5000);
    initializeNav();
    window.addEventListener('scroll', show);
  }
  function showintro(){
    this.classList.remove("hiddenIntro");
  }
  
  function typeLetters(){
    let nameDiv = document.getElementsByClassName("name")[0];
    nameDiv.innerHTML += this
  }

  function initializeNav() {
    document
      .getElementsByClassName("initializeNav")[0]
      .classList.remove("initializeNav");
    let buttons = document.getElementsByClassName("initializeButtons");
    let elements = [...buttons];
    let current = 1000;
    for (let element of elements) {
      window.setTimeout(showNavButtons.bind(element), current);
      current += 200;
    }
    let ham = document.getElementById("rightNav");
    ham.addEventListener("click", openNav.bind("burger"));
    //document.getElementById("content").addEventListener("click", openNav.bind("body"));
    window.setInterval(shaky, 2000);
  }
  function openNav(event) {
    console.log(this);
    let hamNav = document.getElementsByClassName("hamNav")[0];
    if (
      hamNav.classList.contains("activeHam") &&
      (this == "burger" || this == "body")
    ) {
      //document.getElementById("content").removeEventListener("click", openNav.bind("body"));
      hamNav.classList.remove("activeHam");
    } else {
      hamNav.classList.add("activeHam");
    }
  }
  function shaky() {
    let buttons = document.getElementsByClassName("shaky");
    let elements = [...buttons];
    let random = Math.floor(Math.random() * elements.length);
    window.setTimeout(function () {
      elements[random].classList.add("nowShaky");
      window.setTimeout(function () {
        elements[random].classList.remove("nowShaky");
      }, 2000);
    }, 2000);
  }
  function showNavButtons() {
    this.classList.remove("initializeButtons");
  }  
  
  export { initialize }
  