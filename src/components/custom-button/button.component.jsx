import React from 'react';
import './button.style.scss';

const Button = ({ children, googleSignIn, ...ohterProps }) => {
  return(
    <button className={`${googleSignIn ? "google-sign-in" : ""} custom-button`} {...ohterProps}>
      {children}
    </button>
  );
}

export default Button;