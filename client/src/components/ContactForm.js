import emailjs from "emailjs-com";
// import React from "react";

export default function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "template_ja6bo0v",
                e.target,
                "saPGk3cA8ioCV-CZS"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    return (
        <div className="MainContainer">
            <div className="Formcontainer">
                <form onSubmit={sendEmail}>
                    <div className="ContactForm">
                        <p>
                            Here you can send me easily get in contact with me
                            or leave me a comment.
                        </p>
                        <div className="inputBox">
                            <input
                                type="text"
                                // placeholder="Name"
                                name="name"
                                required="required"
                            />
                            <span>Name</span>
                        </div>
                        <div className="inputBox">
                            <input
                                type="email"
                                // placeholder="E-mail"
                                name="email"
                                required="required"
                            />
                            <span>E-mail</span>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                // placeholder="Subject"
                                name="subject"
                                required="required"
                            />
                            <span>Subject</span>
                        </div>
                        <div className="inputBox">
                            <textarea
                                type="text"
                                cols="30"
                                rows="6"
                                // placeholder="Your message"
                                name="message"
                                required="required"
                            ></textarea>
                            <span>Your Message</span>
                        </div>
                        <div>
                            <input className="inputButton" type="submit" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
