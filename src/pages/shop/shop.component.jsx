import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'

class ShopPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collections: SHOP_DATA,
    }
  }

  render(){
    const { collections } = this.state;
    return(
      <div className="container shop-page">
        {
          collections.map(({id, ...otheCollectionProps}) => (
            <CollectionPreview key={id} {...otheCollectionProps}/>
          ))
        }
      </div>
    )
  }
}
export default ShopPage;