import React from 'react';
import {Link} from 'react-router-dom';


export default function NavBar () {
  return (
    <div className="navbar">
      <ul className="nav">
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/campuses"> Campuses </Link></li>
        <li><Link to="/students">Students </Link></li>
      </ul>
    </div>
  );
}
