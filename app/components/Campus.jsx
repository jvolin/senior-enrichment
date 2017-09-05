import React from 'react';
import Students from './Students';

export default function Campus (props) {

  const campus = this.props.campus

  return (
    <div className="campusContainer">
        <h1>{campus.campusName}</h1>
        <img src={campus.photo} />
        <p>{campus.description}</p>
    </div>
  );
}
