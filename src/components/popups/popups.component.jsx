import React from "react";
import classNames from "classnames";
import "./popups.styles.scss";

const Popups = ({ children }) => {
  return (
    <div className={
      classNames("popups", {
        active: children
      })
    }>
      {children}
    </div>
  );
}

export default Popups;