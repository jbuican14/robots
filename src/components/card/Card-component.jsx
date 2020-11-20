import React from 'react';

export const Card = (props) => {
  return (
    <div className="ui card-container">
      <img
        alt="funny robohash"
        src={`https://robohash.org/${props.robot.id}?set=set3&size=185x180`}
      />
      <h3> {props.robot.name}</h3>
    </div>
  );
};
