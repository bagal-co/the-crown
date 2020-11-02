import React from 'react';
import './button.style.scss';

const Button = ({ children, googleSignIn, inverted, ...ohterProps }) => {
  return(
    <button className={`${inverted ? "inverted" : ""} ${googleSignIn ? "google-sign-in" : ""} custom-button`} {...ohterProps}>
      {children}
    </button>
  );
}

export default Button;