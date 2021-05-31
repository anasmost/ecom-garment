import React from "react";
import { Link, withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h3 className="title">{title}</h3>

      <div className="preview">
        {items.slice(0, 4).map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
