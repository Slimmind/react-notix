import React from "react";
import "./button.styles.scss";

const Button = (props) => ( 
    <button
        type={props.type ? props.type : "button"}
        className={props.classes}
        aria-label={props.label}
        onClick={props.handler}
    >
        {props.text}
    </button>
)

export default Button;