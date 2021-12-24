import React from "react";

const InputField = ({
  id,
  classes,
  type,
  name,
  placeholder,
  value,
  checked,
  handler,
  label
}) => {
  const inputLabel = label
    ? <label htmlFor={id}>{label}</label>
    : null;

  return (
    <div className="input-wrap">
      <input
        id={id}
        className={classes}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        checked={checked}
        onChange={handler}
      />
      {
        inputLabel
      }
    </div>
  );
};

export default InputField;