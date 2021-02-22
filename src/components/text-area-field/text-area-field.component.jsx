import React from "react";

const TextAreaField = (props) => (
    <div className="input-wrap">
        <textarea
            name={props.name}
            placeholder={props.placeholder}
            cols="1"
            rows="3"
            className={props.classes}
            value={props.value}
            onChange={props.handler}
        ></textarea>
    </div>
);

export default TextAreaField;