import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <nav>
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
            <li className="option" onClick={() => auth.signOut()}>Sign Out</li>
                        :
            <li>
              <Link className="option" to="/signIn">Sign In</Link>
            </li> 
          }
        </ul>
      </nav>
    </div>
  );
}

export default Header;