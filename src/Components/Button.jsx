import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
  return (
    <button className="btn">{props.text}</button>
  );
};

export default Button;