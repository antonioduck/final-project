import { Component } from "react";

export default function AboutMe() {
    const SendPdf = () => {
        fetch("../cv2022.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "../cv2022.pdf";
                alink.click();
            });
        });
    };
    return (
        <div className="sebody">
            <div className="se-container">
                <div className="se-slope">
                    <article className="se-content">
                        <h3>fdshcskj dbcjdsbc </h3>
                        <p>
                            <img
                                className="loggedPic"
                                src="../linkedin.jpg"
                                alt=""
                            ></img>
                            <button id="AboutMe" onClick={SendPdf}>
                                send Pdf
                            </button>
                            Lorem Ipsum es simplemente el texto de relleno de
                            las imprentas y archivos de texto. Lorem Ipsum ha
                            sido el texto de relleno estándar de las industrias
                            desde el año 1500, cuando un impresor (N. del T.
                            persona que se dedica a la imprenta) desconocido usó
                            una galería de textos y los mezcló de tal manera que
                            logró hacer un libro de textos especimen. No sólo
                            sobrevivió 500 años, sino que tambien ingresó como
                            texto de relleno en documentos electrónicos,
                            quedando esencialmente igual al original. Fue
                            popularizado en los 60s con la creación de las hojas
                            "Letraset", las cuales contenian pasajes de Lorem
                            Ipsum, y más recientemente con software de
                            autoedición, como por ejemplo Aldus PageMaker, el
                            cual incluye versiones de Lorem Ipsum.
                        </p>
                    </article>
                </div>
                <div className="se-slope">
                    <article className="se-content">
                        <h3>fdshcskj dbcjdsbc </h3>
                        <p>
                            Lorem Ipsum es simplemente el texto de relleno de
                            las imprentas y archivos de texto. Lorem Ipsum ha
                            sido el texto de relleno estándar de las industrias
                            desde el año 1500, cuando un impresor (N. del T.
                            persona que se dedica a la imprenta) desconocido usó
                            una galería de textos y los mezcló de tal manera que
                            logró hacer un libro de textos especimen. No sólo
                            sobrevivió 500 años, sino que tambien ingresó como
                            texto de relleno en documentos electrónicos,
                            quedando esencialmente igual al original. Fue
                            popularizado en los 60s con la creación de las hojas
                            "Letraset", las cuales contenian pasajes de Lorem
                            Ipsum, y más recientemente con software de
                            autoedición, como por ejemplo Aldus PageMaker, el
                            cual incluye versiones de Lorem Ipsum.
                        </p>
                    </article>
                </div>
                <div className="se-slope">
                    <article className="se-content">
                        <h3>Qué es Lorem Ipsum</h3>
                        <p>
                            Lorem Ipsum es simplemente el texto de relleno de
                            las imprentas y archivos de texto. Lorem Ipsum ha
                            sido el texto de relleno estándar de las industrias
                            desde el año 1500, cuando un impresor (N. del T.
                            persona que se dedica a la imprenta) desconocido usó
                            una galería de textos y los mezcló de tal manera que
                            logró hacer un libro de textos especimen. No sólo
                            sobrevivió 500 años, sino que tambien ingresó como
                            texto de relleno en documentos electrónicos,
                            quedando esencialmente igual al original. Fue
                            popularizado en los 60s con la creación de las hojas
                            "Letraset", las cuales contenian pasajes de Lorem
                            Ipsum, y más recientemente con software de
                            autoedición, como por ejemplo Aldus PageMaker, el
                            cual incluye versiones de Lorem Ipsum.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
}

// export default AboutMe;
