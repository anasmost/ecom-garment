import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignButton, ...otherProps }) => {
  return (
    <button
      className={`custom-button 
      ${isGoogleSignButton ? "google-sign-in" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
