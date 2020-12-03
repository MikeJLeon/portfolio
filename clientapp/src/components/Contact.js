import Arrow from "./Arrow";

function Contact() {
    return (
        <div id="contactContainer" class="contactContainer">
            <h1>Contact</h1>
            <form>
                <label>
                    Name
                </label>
                <div>-</div>
                <input type="text" name="fname" />
                <label>
                    Your Email
                </label>
                <div>-</div>
                <input type="text" name="femail" />
                <label>
                    Description
                </label>
                <div>-</div>
                <textarea rows="4" cols="50" name="fdesc" />
            </form>
            <div id="contactSubmitbtn">Submit</div>
            <div id="flipArrow">
                <Arrow nextPage="homeContainer" activeLink="homelink" />
            </div>
        </div>
    )
}

export default Contact;