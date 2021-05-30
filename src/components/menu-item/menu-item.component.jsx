import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">SHOP NOW</h3>
      </div>
    </div>
  );
};

export default MenuItem;
