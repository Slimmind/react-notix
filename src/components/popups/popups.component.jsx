import React from "react";
import classNames from "classnames";
import "./popups.styles.scss";

const Popups = (props) => {
    return (
        <div className={
            classNames("popups", {
                active: props.children
            })
        }>
            { props.children }
        </div>
    );
}

export default Popups;