import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, value, id, ...otherInputProps }) => (
  <div className="group">
    <input className="form-input" {...otherInputProps} />
    {label && (
      <label className={`${value.length ? "shrink" : ""} form-input-label`} htmlFor={id}>
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
