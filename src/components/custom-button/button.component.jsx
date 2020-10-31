import React from 'react';
import './button.style.scss';

const Button = ({ children, ...ohterProps }) => {
  return(
    <div className="custom-button" {...ohterProps}>
      {children}
    </div>
  );
}

export default Button;