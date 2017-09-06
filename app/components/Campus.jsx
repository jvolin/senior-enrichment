import React, { Component } from 'react';
import store from '../store';
import { fetchCampus, fetchStudents } from '../reducers';
import { Link } from 'react-router-dom';


export default class Campus extends Component {
  constructor(props){
    super(props)

    this.state = store.getState();
  }

  componentDidMount() {
    const id = this.props.match.params.id
    store.dispatch(fetchCampus(id))
    store.dispatch(fetchStudents())
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
}

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    const selectedCampus = this.state.campus;
    const campusStudents = this.state.students.filter(function(student){
      return student.campusId === selectedCampus.id
    });
    console.log(campusStudents)
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2> Welcome to the {selectedCampus.campusName}</h2>
          </div>
          <div className="col-md-12">
            <p>{selectedCampus.description}</p>
          </div>
          <div className="col-md-12">
            <img className="homepic" src={selectedCampus.photo} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2> Meet {selectedCampus.campusName} Students</h2>
          </div>
          {campusStudents.map(student => {
              return (
                <div className="col-md-4" key={student.id} >
                  <Link to={`/students/${student.id}`}>
                  <h3>{student.firstName} {student.lastName}</h3>
                  <img className="homepic" src={student.photo} />
                  </Link>
                </div>
            )})}
        </div>
      </div>
    );
  }
}

