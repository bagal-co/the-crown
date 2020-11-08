import React from 'react';
import './button.style.scss';

const Button = ({ children, googleSignIn, inverted, solidButton, ...ohterProps }) => {
  return(
    <button className={`${inverted ? "inverted" : ""} ${solidButton ? "solid-btn" : ""}
     ${googleSignIn ? "google-sign-in" : ""} custom-button`}
     {...ohterProps}
     >
      {children}
    </button>
  );
}

export default Button;