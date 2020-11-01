import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
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
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    currentUser: state.user.currentUser
  }
}
export default connect(mapStateToProps)(Header);