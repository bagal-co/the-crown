import React from 'react';
import './footer.style.scss';
import { Link } from 'react-router-dom'
import Button from '../../components/custom-button/button.component';

import { 
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter
 } from 'react-icons/fa'

const Footer = () => {
  return(
    <div className="main_footer">
      <div className="container main_footer-inner">
        <div className="main_footer-about-crown">
          <h2 className="footer-title">About The Crown</h2>
          <p>Founded in 2020, crwon our mission is to make E-commerce awesome. We do this through amazing content and class leading products.</p>
          <div className="social-link">
            <div>
              <FaFacebookF/>
            </div>
            <div>
              <FaInstagram/>
            </div>
            <div>
              <FaTwitter/>
            </div>
            <div>
              <FaWhatsapp/>
            </div>
          </div>
        </div>

        <div className="footer-menu">
          <h2 className="footer-title">Top Menu</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/shop">Contact Us</Link>
          </li>
          <li>
            <Link to="/signin">Log in</Link>
          </li> 
        </ul>
        </div>

        <div className="footer-newsLetter">
          <h2 className="footer-title">NewsLetter</h2>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
        <div className="footer-input">
          <input type="email" placeholder="Enter Your Email..." />
          <Button type="submit" solidButton>Subscribe</Button>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;