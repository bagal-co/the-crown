import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverView from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverView);

export default CollectionOverViewContainer;
  
