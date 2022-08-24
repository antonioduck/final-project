import { Link } from "react-router-dom";
const Popup = ({ project, toglepopup }) => {
    console.log("the project is ", project);
    //    const first = project[0];
    //    const second = project[1];
    return (
        <>
            <Link to={`${project.webpage}`}>
                <img src={project.picture} />
                <h3>{project.ProjectDescription}</h3>
            </Link>
            <h3>{project.ProjectDescription}</h3>
            <p onClick={toglepopup}>x</p>
        </>
    );
};

export default Popup;
