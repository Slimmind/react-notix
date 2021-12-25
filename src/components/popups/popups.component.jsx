import React from "react";
import classNames from "classnames";
import "./popups.styles.scss";

import { types } from './types';

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

Popups.propTypes = types;

export default Popups;