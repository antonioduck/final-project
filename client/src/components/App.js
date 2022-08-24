import { Component } from "react";
import ContactForm from "./ContactForm.js";
import Background from "./Background.js";
import Main from "./Main";
import MyProjects from "./MyProjects.js";
import AboutMe from "./AboutMe.js";
import ParticleBackground from "./ParticleBackground";
import Particles from "react-tsparticles";
import { loadFull } from "react-tsparticles";
import { useCallback } from "react";
import {
    BrowserRouter,
    Route,
    NavLink,
    Redirect,
    Switch,
} from "react-router-dom";



export default class App extends Component {
    render() {
        return (
            <>
                {/* <ParticleBackground /> */}

            
                <BrowserRouter>
                    {/* <Background /> */}
                    <nav className="NavigationBody">
                        <div className="navigation">
                            <ul>
                                {/* <li className="list "> */}
                                <NavLink
                                    to="/"
                                    className="a"
                                    activeClassName="active"
                                    exact={true}
                                >
                                    <span className="icon">
                                        <ion-icon
                                            name="home-outline"
                                            // onClick={this.handleClick}
                                        ></ion-icon>
                                    </span>
                                    <span className="text">Main Page</span>
                                </NavLink>
                                {/* </li> */}
                                {/* <li className="list "> */}
                                <NavLink
                                    to="/AboutMe"
                                    className="a"
                                    activeClassName="active"
                                >
                                    <span className="icon">
                                        <ion-icon
                                            name="person-outline"
                                            // onClick={this.handleClick}
                                        ></ion-icon>
                                    </span>
                                    <span className="text">About me</span>
                                </NavLink>
                                {/* </li> */}
                                {/* <li className="list "> */}
                                <NavLink
                                    to="/MyProjects"
                                    className="a"
                                    activeClassName="active"
                                >
                                    <span className="icon">
                                        <ion-icon
                                            name="copy-outline"
                                            // onClick={this.handleClick}
                                        ></ion-icon>
                                    </span>
                                    <span className="text">My Projects</span>
                                </NavLink>
                                {/* </li> */}
                                {/* <li className="list "> */}
                                <NavLink
                                    to="/ContactForm"
                                    className="a"
                                    activeClassName="active"
                                >
                                    <span className="icon">
                                        <ion-icon
                                            name="mail-outline"
                                            // onClick={this.handleClick}
                                        ></ion-icon>
                                    </span>
                                    <span className="text">Contact Me</span>
                                </NavLink>
                                {/* </li> */}
                                <div className="indicator"></div>
                            </ul>
                        </div>
                    </nav>

                    <Route exact path="/ContactForm">
                        <ContactForm />
                    </Route>
                    <Route exact path="/MyProjects">
                        <MyProjects />
                    </Route>
                    <Route exact path="/AboutMe">
                        <AboutMe />
                    </Route>
                    <Route exact path="/">
                        <Main />
                    </Route>
                </BrowserRouter>
            </>
        );
    }
}
