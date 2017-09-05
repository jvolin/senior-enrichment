import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Campuses from './Campuses';
import Students from './Students';

export default function Main () {

  return (
    <div>
      <Switch>
        <Route exact path="/campuses" componenet={Campuses} />
        <Route exact path="/students" componenet={Students} />
        <Redirect to="/campuses" />
      </Switch>
    </div>
  );
}
