import React from "react";
import "./controls.styles.scss";
import {types} from './types';

export const Controls = ({type, children}) => (
  <div className={`controls ${type}`}>{children}</div>
);

Controls.propTypes = types;