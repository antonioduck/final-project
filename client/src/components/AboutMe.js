import { Component } from "react";

export default function AboutMe() {
    const SendPdf = () => {
        fetch("../Teneketzis_Antonios_cv2022.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "../Teneketzis_Antonios_cv2022.pdf";
                alink.click();
            });
        });
    };
    return (
        <div className="sebody">
            <div className="se-container">
                <div className="se-slope">
                    <article className="se-content">
                        <h3>A few words about me ... </h3>

                        <p>
                            I was born in Greece and I came in Berlin 3.5 years
                            ago . I studied Biomedical Engineering in Greece and
                            I worked on that field for almost a year . After
                            that , due to crisis in Greece , I was unable to
                            find a job in my field , so I decided to change my
                            career path . I completed a Bachelor in Tourism and
                            I worked in hotels in Athens and Santorini for
                            almost 7 years . After that I came in Berlin where I
                            worked in gastronomy for two years . When my
                            contract finished , I decided to take a break from
                            work and improve my knowledge in German language .
                            That was when coding came into my life.
                        </p>
                    </article>
                </div>
                <div className="se-slope">
                    <article className="se-content">
                        <h3>Why coding ? </h3>
                        <p>
                            I always loved computers and learning new staff . I
                            think coding is a quite interesting working field
                            with many possibilities and opportunities and will
                            always be in high demand . It is also a safe working
                            choice because you are capable of working homeoffice
                            100% in case another coronavirus wave strikes .
                        </p>
                    </article>
                </div>
                <div className="se-slope">
                    <article className="se-content">
                        <h3>Wanna know more?</h3>
                        <p>
                            If you like what you read so far, you can take a
                            look at my Linkedin , Github and Instagram account or
                            download my CV by clicking on the button . If you
                            want to , you can easily leave me a comment in the
                            "Contact me" section .
                        </p>
                        <p>
                            <a
                                href="https://www.linkedin.com/in/teneketzis-antonios-664b10158/"
                                target="blank"
                            >
                                <img
                                    className="loggedPic"
                                    src="../linkedin.jpg"
                                    alt=""
                                ></img>
                            </a>
                            <a
                                href="https://github.com/antonioduck"
                                target="blank"
                            >
                                <img
                                    className="loggedPic"
                                    src="../github.jpg"
                                    alt=""
                                ></img>
                            </a>
                            <a
                                href="https://www.instagram.com/antonio_tenek/"
                                target="blank"
                            >
                                <img
                                    className="loggedPic"
                                    src="../instagram.jpg"
                                    alt=""
                                ></img>
                            </a>
                        </p>
                        <p>
                            You can easily download my CV as PDF by clicking on
                            the button:
                            <button id="AboutMeButton" onClick={SendPdf}>
                                Get CV
                            </button>
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
}

// export default AboutMe;
