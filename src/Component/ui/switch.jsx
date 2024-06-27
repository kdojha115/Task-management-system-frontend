// Switch.jsx

import React from 'react';

const Switch = ({ id, defaultChecked }) => {
  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
      <span className="relative">
        <input type="checkbox" id={id} defaultChecked={defaultChecked} className="sr-only" />
        <span className="block bg-gray-600 w-14 h-8 rounded-full"></span>
        <span className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></span>
      </span>
      <span className="text-sm">Toggle</span>
    </label>
  );
};

export default Switch;
