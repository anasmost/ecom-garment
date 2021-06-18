import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection-page.component";

import "./shoppage.styles.scss";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (collectionsSnapshot) => {
      const collectionsMap =
        convertCollectionsSnapshotToMap(collectionsSnapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={match.path} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.path}/:collectionRoute`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
