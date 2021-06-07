import React from "react";
import { Route } from "react-router";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection-page.component";

import "./shoppage.styles.scss";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={match.path} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionRoute`} component={CollectionPage} />
  </div>
);

export default ShopPage;
