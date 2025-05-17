import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  return (
    <div className='main-container'>
      <img className='avatar-post' src={props.image} alt="icon-avatar" />
      <div className="info-container">
        <h4 className='username-container'><strong>{props.username}</strong></h4>
        <h3 className='post-title'>{props.title}</h3>
        <p>{props.postContent}</p>
      </div>
    </div>
  );
}

export default Card;
