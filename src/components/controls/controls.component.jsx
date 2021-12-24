import React from "react";
import "./controls.styles.scss";

const Controls = ({type, children}) => (
    <div className={`controls ${type}`}>{children}</div>
);

export default Controls;