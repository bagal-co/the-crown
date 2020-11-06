import React from 'react';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionOverViewWithSpinner = WithSpinner(CollectionOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (sanpshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(sanpshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  };
  render(){
    const { match } = this.props;
    const { loading } = this.state;
    return(
      <div className="container shop-page">
        <Router>
          <Route exact path={`${match.path}`} render={(props) => <CollectionOverViewWithSpinner isLoading={loading} {...props}/>}/>
          <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
        </Router>
      </div>
    );
  }
};
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);