// Checkbox.jsx

import React from 'react';

const Checkbox = ({ id, defaultChecked }) => {
  return (
    <input type="checkbox" id={id} defaultChecked={defaultChecked} className="form-checkbox h-5 w-5 text-primary" />
  );
};

export default Checkbox;
