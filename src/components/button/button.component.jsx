import React from "react";
import "./button.styles.scss";
import { types } from './types';

export const Button = ({
  type,
  classes,
  label,
  handler,
  text
}) => (
  <button
    type={type ? type : "button"}
    className={classes}
    aria-label={label}
    onClick={handler}
  >
    {text}
  </button>
);

Button.propTypes = types;