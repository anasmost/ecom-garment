import React, { Component } from "react";
import "./directory-menu.styles.scss";
import SECTIONS_DATA from "./sections.data";

import MenuItem from "../menu-item/menu-item.component";

export class MenuDirectory extends Component {
  state = {
    sections: SECTIONS_DATA,
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default MenuDirectory;
