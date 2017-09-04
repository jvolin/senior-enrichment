import React, { Component } from 'react';

export default class Root extends Component {

  componentDidMount() {
    console.log('mounted')
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <h1> Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2>Visit A Campus!</h2>
          </div>
          <div className="col">
            <h2>Meet our Students!</h2>
          </div>
        </div>

      </div>
    );
  }
}
