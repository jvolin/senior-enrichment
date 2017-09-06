import React, { Component } from 'react';
import store from '../store';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../reducers';


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

  render() {
    const students = this.state.students
    return (
      <div className="row">
        <div className="col-md-12">
          <h2> Meet Our Students</h2>
        </div>
          {students.map(student => {
          return (
            <div className="col-md-4" key={student.id} >
              <Link to={`/students/${student.id}`}>
              <h3>{student.firstName} {student.lastName}</h3>
              <img className="homepic" src={student.photo} />
              </Link>
            </div>
          )})}
      </div>
    )
  }
}

