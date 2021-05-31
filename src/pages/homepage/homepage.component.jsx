import React from "react";
import "./homepage.styles.scss";

import MenuDirectory from "../../components/directory-menu/directory-menu.component";

const Homepage = (props) => (
  <div className="homepage">
    <MenuDirectory />
  </div>
);

export default Homepage;