import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';

export default function Main () {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/campuses" component={Campuses} />
        <Route exact path="/students" component={Students} />
      </Switch>
    </div>
  );
}

