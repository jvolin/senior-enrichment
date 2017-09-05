import React, { Component } from 'react';
import Student from './Student'
import store from '../store';
import { fetchStudents } from '../reducers'


export default class Students extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
  }
  componentDidMount() {

    store.dispatch(fetchStudents());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    return (
      <div>
        <h2> Meet Our Students</h2>
      </div>
    )
  }
}

