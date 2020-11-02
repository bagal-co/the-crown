import React from 'react';
import './cart-dropdown.style.scss';
import Button from '../../components/custom-button/button.component';

const CartDropdown = () => {
  return(
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;