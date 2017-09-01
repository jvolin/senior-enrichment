import React, { Component } from 'react';
import Student from './Student'
import store from '..reducers/store';


export default class AllStudent extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState
  }

  render(){
    return ()
  }
}
