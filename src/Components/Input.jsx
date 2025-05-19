import React from 'react';
import '../styles/Input.css';

const Input = ({ text, value, onChange }) => {
  return (
    <div className="floating-label-container">
      <input
        type="text"
        className="input"
        id="my-input"
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label htmlFor="my-input" className="label">{text}</label>
    </div>
  );
};

export default Input;