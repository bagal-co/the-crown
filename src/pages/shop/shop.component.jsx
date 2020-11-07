import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import CollectionPageContainer from '../collection/collection.container';
import CollectionOverViewContainer from '../../components/collection-overview/collection.overview.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component{
  componentDidMount(){
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  };
  render(){
    const { match } = this.props;
    return(
      <div className="container shop-page">
        <Router>
          <Route exact path={`${match.path}`} component={CollectionOverViewContainer}/>
          <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </Router>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(null, mapDispatchToProps)(ShopPage);