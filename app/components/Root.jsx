import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Campuses from './Campuses';

export default function Root () {

  return (
    <div className="container">
      <Header />
      <Main />
      <Campuses />
    </div>
  );
}

