// import { Link } from "react-router-dom";
const Popup = ({ project, toglepopup }) => {
    console.log("the project is ", project);

    return (
        <div className="MainPopup">
            <div className="Overlay"></div>
            <div className="popupclass">
                <div>
                    <p onClick={toglepopup}>x</p>
                </div>
                <p>{project[0].ProjectName}</p>
                <a href={project[0].webpage}>
                    <img
                        src={project[0].picture}
                        width="150px"
                        height="150px"
                    />
                </a>
                <p>{project[0].ProjectDescription}</p>
            </div>
        </div>
    );
};

export default Popup;
