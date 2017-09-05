import React, { Component } from 'react';
import Student from './Student'
import store from '../store';


export default class Students extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState
  }

  render(){
    return (
      <div>
        <h2> Meet our Students</h2>
      </div>
    )
  }
}

