import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

function CollectionPreview({ title, items, match, routeName }) {
  return (
    <div className="collection-preview">
      <Link to={`${match.path}/${routeName}`}>
        <h3 className="title">{title}</h3>
      </Link>
      <div className="preview">
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default withRouter(CollectionPreview);
