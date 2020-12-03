export function scroll(arrowDestination, link){
    if(link){
        document.getElementsByClassName("activeLink")[0].classList.remove("activeLink");
        document.getElementById(link).classList.add("activeLink");
    }
    document.getElementById(arrowDestination).scrollIntoView(true);
}
