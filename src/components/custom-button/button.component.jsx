import React from 'react';
import './button.style.scss';

const Button = ({ children, googleSignIn, ...ohterProps }) => {
  return(
    <div className={`${googleSignIn ? "google-sign-in" : ""} custom-button`} {...ohterProps}>
      {children}
    </div>
  );
}

export default Button;