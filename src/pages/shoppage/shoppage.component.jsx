import React, { Component } from "react";

import "./shoppage.styles.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const collections = this.state.collections;

    return (
      <div>
        <h2>Collections</h2>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
