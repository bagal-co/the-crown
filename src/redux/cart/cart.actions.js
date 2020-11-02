import { cartActionType } from './cart.types';
export const toggleCartHidden = () => {
  return{
    type: cartActionType.TOGGLE_CART_HIDDEN
  }
}
