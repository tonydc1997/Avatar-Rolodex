import React from 'react';
import './card.styles.css';

export default function Card(props) {
  return (
    <div className="card-container">
      <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set5`} />
      <h1>{props.monster.name}</h1>
    </div>
  );
}
