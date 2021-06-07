import "./collection-page.styles.scss";

import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectSingleCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection: { title, items } }) => (
    <div className="collection">
      <h2 className='title'>{title}</h2>
      <div className="collection-items">
        {items.map((item) => (
          <CollectionItem item={item} />
        ))}
      </div>
    </div>
);

const mapStateToProps = (state, { match }) => ({
  collection: selectSingleCollection(match.params.collectionRoute)(state),
});

export default connect(mapStateToProps)(CollectionPage);
