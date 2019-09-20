import React from 'react';
import './card.styles.css';

export default function Card(props) {
  return (
    <div className="card-container">
      <h1>{props.monster.name}</h1>
    </div>
  );
}
