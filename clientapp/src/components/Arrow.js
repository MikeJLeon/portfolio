import React, { useEffect, useState } from "react";
import {scroll} from "../js/scroll";

function Arrow(props) {
    const [arrowDestination, setArrowDestination] = useState("");
    const [activeLink, setActiveLink] = useState("");
    useEffect(()=>{
        setArrowDestination(props.nextPage);
        setActiveLink(props.activeLink);
    })
    return (
        <div className="arrowContainer">
                <div className="arrow hiddenIntro" onClick={() => scroll(arrowDestination, activeLink)}>

                </div>
        </div>
    )
}

export default Arrow