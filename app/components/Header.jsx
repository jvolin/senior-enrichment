import React from 'react';
import NavBar from './NavBar';

export default function Header () {

  return (
    <header>
      <div className="row">
        <div className="col-xs-12 col-md-8">
          <h1> Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
