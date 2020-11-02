import { cartActionType } from './cart.types';
export const toggleCartHidden = () => {
  return{
    type: cartActionType.TOGGLE_CART_HIDDEN
  }
}

export const addItem = item => {
  return{
    type: cartActionType.ADD_CART_ITEM,
    payload: item
  }
};