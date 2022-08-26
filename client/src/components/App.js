// import { Component } from "react";
import ContactForm from "./ContactForm.js";
import Background from "./Background.js";
import Main from "./Main";
import MyProjects from "./MyProjects.js";
import AboutMe from "./AboutMe.js";
// import ParticleBackground from "./ParticleBackground";
// import Particles from "react-tsparticles";
// import { loadFull } from "react-tsparticles";
// import { useCallback } from "react";
import { useState } from "react";
import {
    BrowserRouter,
    Route,
    NavLink,
    // Redirect,
    // Switch,
} from "react-router-dom";

export default function App() {
    const [isActive, setActive] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    const handleclick = () => {
        setLoading(!loading);
    };
    return (
        <>
            {/* <div className="whrapper">
                <div id="Box3" className={loading ? "Box3" : null}>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <button className="thisbutton2" onClick={handleclick}>
                        squares
                    </button>
                </div>
            </div>
            <div className="objects">
                <ul id="Box" className={isActive ? "Box" : null}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <button id="thisbutton" onClick={handleToggle}>
                        circles
                    </button>
                </ul>
            </div> */}
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
                <Route exact path="/AboutMe">
                    <AboutMe />
                </Route>

                <div className="whrapper">
                    <div id="Box3" className={loading ? "Box3" : null}>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <button className="thisbutton2" onClick={handleclick}>
                            BG1
                        </button>
                    </div>
                </div>
                <div className="objects">
                    <ul id="Box" className={isActive ? "Box" : null}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <button id="thisbutton" onClick={handleToggle}>
                            BG2
                        </button>
                    </ul>
                </div>

                <Route exact path="/MyProjects">
                    <MyProjects />
                </Route>
                {/* <Route exact path="/AboutMe">
                    <AboutMe />
                </Route> */}
                <Route exact path="/ContactForm">
                    <ContactForm />
                </Route>
                <Route exact path="/">
                    <Main />
                </Route>
            </BrowserRouter>
        </>
    );
}
