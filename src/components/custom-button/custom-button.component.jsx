import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignButton, inverted, ...otherProps }) => {
  return (
    <button className={"custom-button" + (isGoogleSignButton ? " google-sign-in" : "") + (inverted ? " inverted" : "")} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
