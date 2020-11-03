const INITIAL_STATE = {
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
};

const directoryReducer = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    default:
      return state
  }
};
export default directoryReducer;