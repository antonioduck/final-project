import { useState } from "react";
import PopUp from "./PopUp.js";

function MyProjects() {
    const [PopupOnClick, setPopupOnClick] = useState(false);

    const handleClick = (e) => {
        setPopupOnClick(!PopupOnClick);
        console.log("target is", e.currentTarget.id);
        const sth = projects.filter((item) => item.id == e.currentTarget.id);
        console.log("sth is:", sth);
        setProject(sth);
    };
    const [project, setProject] = useState();
    const projects = [
        // {
        //     id: 0,
        //     ProjectName: "Connect four",
        //     ProjectDescription:
        //         "This was the first project that I ever made using just HTLM , CSS and Javascript. Looking back on it now , makes me feel so proud.Two players are playing .If a players manages to have four pieces in a row (horizontal,vertical , or diagonal,wins.) ",
        //     picture: "connect-four.png",
        //     webpage: "#",
        // },
        {
            id: 1,
            ProjectName: "Petition",
            ProjectDescription:
                "Petition was the first Project that I had to upload on Heroku app.My first contact with the world of back end .The user is able to register/login and sign the petition project. Is also able to see all the other users who alredy signed the project ",
            picture: "petition.png",
            webpage: "https://antonio86petition.herokuapp.com/register",
        },
        {
            id: 2,
            ProjectName: "Imageboard",
            ProjectDescription:
                "Imageboard is a quite cool project where the visitor is able to register or login , ulpoad an image with a description , and leave a comment in that specific image  ",
            picture: "imageboard.png",
            webpage: "https://anthony86imageboard.herokuapp.com/",
        },
        {
            id: 3,
            ProjectName: "SocialNetwork",
            ProjectDescription:
                "Eventhough is quite self explanatory, social network is a project where the user is able to register/login ,modify its picture and its bio and being able to interract with other users as well  ",
            picture: "social.png",
            webpage: "https://anthony86social-network.herokuapp.com/",
        },
    ];

    return (
        <div className="Projects">
            <section>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section>
            {PopupOnClick && (
                <PopUp toglepopup={handleClick} project={project} />
            )}
            <div className="maping">
                {projects.map((item) => {
                    return (
                        <div key={item.id} className="ProjectsDiv">
                            <div>
                                <img
                                    className="loggedPic"
                                    src={item.picture}
                                    alt="logo"
                                    id={item.id}
                                    onClick={handleClick}
                                ></img>
                                <br />
                                <h2 id={item.id}>{item.ProjectName}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>

            <section>
                <div className="wave5 wave6"></div>
                <div className="wave5 wave7"></div>
                <div className="wave5 wave8"></div>
                <div className="wave5 wave9"></div>
            </section>
        </div>
    );
}
export default MyProjects;
