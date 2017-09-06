import React, { Component } from 'react';
import store from '../store';
import { fetchStudent, fetchCampuses } from '../reducers';
import { Link } from 'react-router-dom';


export default class Student extends Component {
  constructor(props){
    super(props)
    this.state = store.getState();
  }

  componentDidMount() {
    const studentId = this.props.match.params.id
    store.dispatch(fetchStudent(studentId))
    store.dispatch(fetchCampuses())
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
}

// componentDidUpdate() {
//   console.log(this.state)
//   const campusId = this.state.student.campusId
//     store.dispatch(fetchCampus(campusId))
// }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    const student = this.state.student;
    const studentCampus = this.state.campuses.filter(function(campus){
      return student.campusId === campus.id
    });
    console.log(studentCampus)

    return (

        <div className="row">
          <div className="col-md-8">
            <img className="homepic" src={student.photo} />
          </div>
          <div className="col-md-4">
            <h2> {student.firstName} {student.lastName}</h2>
            <Link to={'#'}>
              <p>{student.email}</p>
            </Link>
            <p>{student.bio}</p>
            <h4> {student.firstName} is a student at </h4>
            {studentCampus.map(campus => {
              return (
                <div  key={campus.id} >
                  <Link to={`/campuses/${campus.id}`}>
                  <h4>{campus.campusName} </h4>
                  </Link>
                </div>
              )})}
          </div>
        </div>
    );
  }
}
