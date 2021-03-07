import React from 'react';
import { Card } from '../card/Card-component';

const CardList = (props) => {
  return (
    <div className="ui class-list">
      {props.robots.map((robot, idx) => (
        <Card key={idx} robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
