// import { Link } from "react-router-dom";
const Popup = ({ project, toglepopup }) => {
    console.log("the project is ", project);

    return (
        <div className="MainPopup">
            <div className="Overlay"></div>
            <div className="popupclass">
                <div>
                    <p className="myX" onClick={toglepopup}>
                        x
                    </p>
                </div>
                <p>{project[0].ProjectName}</p>

                <img
                    className="Img2webpage"
                    src={project[0].picture}
                    width="150px"
                    height="150px"
                />

                <p>{project[0].ProjectDescription}</p>
                <p>
                    <a href={project[0].webpage} target="blank">
                        Visit Webpage
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Popup;
