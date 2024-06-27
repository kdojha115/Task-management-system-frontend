// Button.jsx

import React from 'react';

const Button = ({ variant, size, className, children }) => {
  const classNames = `px-4 py-2 rounded-md ${className} ${variant === 'ghost' ? 'bg-transparent text-primary border-primary border' : 'bg-primary text-white'} ${size === 'icon' ? 'flex items-center gap-2' : ''}`;

  return (
    <button className={classNames}>
      {children}
    </button>
  );
};

export default Button;
