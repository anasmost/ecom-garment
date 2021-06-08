import React from "react";
import "./menu-item.styles.scss";

import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(`/${linkUrl}`)}>
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

export default withRouter(MenuItem);
