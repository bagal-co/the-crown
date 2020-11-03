const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'images/hats.png',
      linkUrl: 'shop/hats'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'images/jackets.png',
      linkUrl: 'shop/jackets'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'images/sneakers.png',
      linkUrl: 'shop/sneakers'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'images/womens.png',
      size: 'large',
      linkUrl: 'shop/womens',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'images/men.png',
      size: 'large',
      linkUrl: 'shop/mens',
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    default:
      return state
  }
};
export default directoryReducer;