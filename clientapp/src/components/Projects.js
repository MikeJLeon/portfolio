import Arrow from "./Arrow";
import planner from "../img/planner.png" 
function Projects() {
    return (
        <div id="projectsContainer" class="projectsContainer">
            <h1>Projects</h1>
            <div class="workContainer">
            <div class="workTile">
                    <div class="workUpper">
                        <img class="workUpperBG" src={planner}/>
                        <div class="workUpperOverlay"></div>
                        <h3>Planner</h3>
                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
                <div class="workTile">
                    <div class="workUpper">

                    </div>
                    <div class="workLower">

                    </div>
                </div>
            </div>
            <Arrow nextPage="aboutContainer" activeLink="aboutlink" />
        </div>
    )
}

export default Projects;