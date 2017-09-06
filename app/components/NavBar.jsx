import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar () {
  return (
    <div className="navbar">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link to="/"> Home </Link>
        </li>
        <li className="nav-item">
          <Link to="/campuses"> Campuses </Link>
        </li>
        <li className="nav-item">
          <Link to="/students">Students </Link>
        </li>
      </ul>
    </div>
  );
}
