import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo/crown.svg';

const Header = () => {
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
        </ul>
      </nav>
    </div>
  );
}

export default Header;