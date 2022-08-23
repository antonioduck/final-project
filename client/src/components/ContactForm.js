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
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="ConactForm">
                        <p>
                            Here you can send me easily get in contact with me
                            or leave me a comment.
                        </p>
                        <div>
                            <input type="text" placeholder="Name" name="name" />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="E-mail"
                                name="email"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                            />
                        </div>
                        <div>
                            <textarea
                                cols="10"
                                rows="8"
                                placeholder="Your message"
                                name="message"
                            ></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
