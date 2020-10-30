import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends React.Component {
  constructor(){
    super()

    this.state = {
      sections: [
        {
          id: 1,
          title: 'hats',
          imageUrl: 'images/hats.png',
          linkUrl: 'shop'
        },
        {
          id: 2,
          title: 'jackets',
          imageUrl: 'images/jackets.png',
          linkUrl: ''
        },
        {
          id: 3,
          title: 'sneakers',
          imageUrl: 'images/sneakers.png',
          linkUrl: ''
        },
        {
          id: 4,
          title: 'womens',
          imageUrl: 'images/womens.png',
          size: 'large',
          linkUrl: '',
        },
        {
          id: 5,
          title: 'mens',
          imageUrl: 'images/men.png',
          size: 'large',
          linkUrl: '',
        }
      ]
    }
  }

  render(){
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))
        }
      </div>
    )
  }
}

export default Directory;
