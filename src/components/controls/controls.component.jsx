import React from "react";
import "./controls.styles.scss";

const Controls = (props) => (
    <div className={`controls ${props.type}`}>{props.children}</div>
);

export default Controls;