import React from 'react';
import './card.styles.css';

export default function Card(props) {
  return (
    <div className="card-container">
      <img
        alt="human avatars"
        src={`https://robohash.org/${props.avatar.id}?set=set5&size=180x180`}
      />
      <h2>{props.avatar.name}</h2>
      <p>{props.avatar.email}</p>
    </div>
  );
}
