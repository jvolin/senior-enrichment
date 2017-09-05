import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Campuses from './Campuses';
import Campus from './Campus';
import Students from './Students';
import Student from './Student';

export default function Main () {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/campuses" component={Campuses} />
        <Route path="campuses/:id" component={Campus} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/students/:id" component={Student} />
      </Switch>
    </div>
  );
}

