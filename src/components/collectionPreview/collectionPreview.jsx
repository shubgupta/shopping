import React from 'react';
import CollectionItem from '../collection-item/collectionItem.jsx'
import './collectionPreview.scss'
const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...OtherCollectionItem }) => (
          // <CollectionItem key={id} {...otherItemProps} />
          <CollectionItem key={id} {...OtherCollectionItem} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;