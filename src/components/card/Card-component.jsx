import React from 'react';

export const Card = (props) => {
  const { username, company, email, phone } = props.robot;
  let srcURL;
  if (props.robot.id > 4) {
    srcURL = `https://robohash.org/${props.robot.id}?set=set3&size=185x180`;
  } else {
    srcURL = `https://robohash.org/H2${props.robot.id}?set=set4&size=185x180`;
  }
  return (
    <div className="ui card-container">
      <img alt="funny robohash" src={srcURL} />
      <h2>{username} </h2>
      <p>
        <strong>Company</strong> : {company.name}
      </p>
      <p>
        <span>
          <i className="fas fa-envelope-open"></i>
        </span>
        {email}
      </p>
      <p>
        <i className="fas fa-phone-volume"></i>
        {phone}
      </p>
    </div>
  );
};
