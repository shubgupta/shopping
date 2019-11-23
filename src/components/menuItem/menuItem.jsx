import React from 'react';
import './menuItem.scss'
export const MenuItem = ({ title, imageUrl, size, id }) => {
  return (
    <div className={`${size} menu-item`}>
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}>
      </div>
      <div className="content">
        <div className="title">
          {title}
        </div>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  )
}