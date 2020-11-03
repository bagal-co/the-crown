import React from 'react';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import { BrowserRouter as Router, Route } from "react-router-dom";


const ShopPage = ({ match }) => {
  console.log(match)
  return(
    <div className="container shop-page">
      <Router>
        <Route exact path={`${match.path}`} component={CollectionOverView} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </Router>
    </div>
  );
};
export default ShopPage;