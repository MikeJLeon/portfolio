import React, { useEffect, useState } from "react";

function scrollDown(arrowDestination){
    console.log(document.querySelector(arrowDestination));
    document.querySelector(arrowDestination).scrollIntoView(true);
}

function Arrow(props) {
    const [arrowDestination, setArrowDestination] = useState("");
    useEffect(()=>{
        setArrowDestination(props.nextPage);
    })
    return (
        <div className="arrowContainer">
                <div className="arrow hiddenIntro" onClick={() => scrollDown(arrowDestination)}>

                </div>
        </div>
    )
}

export default Arrow