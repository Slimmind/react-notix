import React from "react";

const InputField = (props) => {
    const label =  props.label 
    ? <label htmlFor={props.id}>{props.label}</label>
    : null;

    return (
        <div className="input-wrap">
            <input
                id={props.id}
                className={props.classes}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                checked={props.checked}
                onChange={props.handler}
            />
            {
                label
            }
        </div>
    );
};

export default InputField;