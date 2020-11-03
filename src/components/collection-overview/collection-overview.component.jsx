import React from 'react';
import './collection-overview.style.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverView = ({ collections }) => {
  return(
    <div className="collections-overview">
      {
        collections.map(({id, ...otheCollectionProps}) => (
          <CollectionPreview key={id} {...otheCollectionProps}/>
        ))
      }
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionOverView);