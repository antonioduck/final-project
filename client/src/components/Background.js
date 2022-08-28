//
import React, { useState, useEffect } from "react";

export default function Background() {
    const [show, setShow] = useState(true);
    // const initialState = "Next";
    // const [buttonText, setButtonText] = useState("Next"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

    // useEffect(() => {
    //     if (buttonText !== initialState) {
    //         setTimeout(() => setButtonText(initialState), [1000]);
    //     }
    // }, [buttonText]);

    // const changeText = (text) => setButtonText(text);
    return (
        <>
            {/* <button type="button" onClick={() => changeText("newText")}>
                {buttonText}
            </button> */}

            <div className="MyApp">
                {show ? <h1>Hello World !</h1> : null}
                <button onClick={() => setShow(true)}>Show</button>
                <button onClick={() => setShow(false)}>Hide</button>
            </div>
        </>
    );
}
