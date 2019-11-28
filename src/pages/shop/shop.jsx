import React from 'react';
import SHOP_DATA from './shopData.js';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.jsx'
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: SHOP_DATA
    }
  }
  render() {
    const { collection } = this.state;
    return (
      <div className='shop-page'>
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;

