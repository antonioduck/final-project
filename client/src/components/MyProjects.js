import { useState } from "react";
import PopUp from "./PopUp.js";

function MyProjects() {
    const [PopupOnClick, setPopupOnClick] = useState(false);

    const handleClick = (e) => {
        setPopupOnClick(!PopupOnClick);
        console.log("target is", e.currentTarget);
    };

    const [project, setProject] = useState([
        {
            id: 0,
            ProjectName: "Connect four",
            ProjectDescription:
                "This was the first project that I ever made using just HTLM , CSS and Javascript. Looking back on it now , makes me feel so proud",
            picture: "image5.jpg",
            webpage: "https://de.yahoo.com/?p=us",
        },
        {
            id: 1,
            ProjectName: "Petition",
            ProjectDescription:
                "Petition was the first Project that I had to upload on Heroku app.My first contact with the world of back end . ",
            picture: "dogfeet.jpg",
            webpage: "https://de.yahoo.com/?p=us",
        },
    ]);

    const first = project[0];
    const second = project[1];
    return (
        <div className="Projects">
            <h2>id: {first.ProjectName}</h2>
            <h2>name: {first.ProjectDescription}</h2>
            <h2>id: {second.id}</h2>
            <h2>name: {second.name}</h2>
            <a href={first?.webpage}>connect Four</a>
            <img
                className="loggedPic"
                src={first.picture}
                alt="logo"
                id={first.id}
                onClick={handleClick}
            ></img>
            <img
                className="loggedPic"
                src={second?.picture}
                alt="logo"
                // onClick={showPopup}
            ></img>
            <section>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
                {PopupOnClick && <PopUp project={project[project.id]} />}
            </section>
        </div>
    );
}
export default MyProjects;
