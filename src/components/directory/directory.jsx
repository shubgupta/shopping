import React from 'react';
import './directory.scss'
import { MenuItem } from '../menuItem/menuItem'
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'images/categories/hats.png',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'images/categories/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'images/categories/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'images/categories/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'images/categories/men.png',
          size: 'large',
          id: 5
        }
      ]
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ title, imageUrl, size, id }) => (
            <MenuItem title={title} imageUrl={imageUrl} size={size} key={id} />
          ))
        }
      </div>
    )
  }
}
export default Directory;