import { useState } from "react";

export default function Background() {
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
            </div>
        </>
    );
}
