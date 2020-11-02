import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../../components/card-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <nav className="container">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
        <ul className="options">
          <li>
            <Link className="option" to="/shop">Shop</Link>
          </li>
          <li>
            <Link className="option" to="/shop">Contact</Link>
          </li>

          {
            currentUser ?
            <Link className="option" onClick={() => auth.signOut()}>Sign Out</Link>
                        :
            <li>
              <Link className="option" to="/signin">Sign In</Link>
            </li> 
          }
          <CartIcon />
        </ul>
        {hidden ? null : <CartDropdown />}
      </nav>
    </div>
  );
}

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) =>{
  return {
    currentUser,
    hidden
  }
}
export default connect(mapStateToProps)(Header);