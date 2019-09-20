import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.avatars.map(avatar => (
        <Card key={avatar.id} avatar={avatar} />
      ))}
    </div>
  );
}
