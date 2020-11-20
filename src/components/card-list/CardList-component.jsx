import React from 'react';
import { Card } from '../card/Card-component';

const CardList = (props) => {
  return (
    <div className="ui class-list">
      {props.robots.map((robot, idx) => (
        // <h1 key={idx}>{robot.name} </h1>
        <Card key={idx} robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
