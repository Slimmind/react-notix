import React from "react";

import { types } from './types';

export const TextAreaField = ({
  name,
  placeholder,
  classes,
  value,
  handler
}) => (
  <div className="input-wrap">
    <textarea
      name={name}
      placeholder={placeholder}
      cols="1"
      rows="3"
      className={classes}
      value={value}
      onChange={handler}
    ></textarea>
  </div>
);

TextAreaField.propTypes = types;