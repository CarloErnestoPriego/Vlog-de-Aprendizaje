import React from 'react';

import '../styles/Input.css';

const Input = (props) => {
  return (
    <div className="floating-label-container">
      <input type="text" className="input" id="my-input" placeholder=" " />
      <label htmlFor="my-input" className="label">{props.text}</label>
    </div>
  );
};

export default Input;
