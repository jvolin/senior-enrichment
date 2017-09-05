import React from 'react';
import NavBar from './NavBar';

export default function Header () {

  return (
    <header>
      <div className="row">
        <div className="col-md-1">
          <img className="logo" src="https://image.flaticon.com/icons/svg/547/547418.svg" />
        </div>
        <div className="col-md-11">
          <h1> Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        </div>
      </div>
      <div className="row">
        <NavBar />
      </div>
    </header>
  );
}
