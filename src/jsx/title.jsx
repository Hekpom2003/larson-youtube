import Logo from "../images/logo.svg";
import React from "react";

export function Title() {
    return (
        <div className="title">
            <h1>Секретные видео с передовой аналитикой</h1>
            <div className="title__icon">
                <img src={Logo} alt=""/>
            </div>
        </div>

    )
}