import React, { Component } from 'react';
import Campus from './Campus'
import store from '../store';
import { Link } from 'react-router-dom';
import { fetchCampuses } from '../reducers';


export default class Campuses extends Component {
  constructor(props){
    super(props)

    this.state = store.getState();
  }

  componentDidMount() {

    store.dispatch(fetchCampuses());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    const campuses = this.state.campuses
    return (

      <div className="row">
      <h2>Visit Our Campuses</h2>
      {campuses.map(campus => {
        return (
          <div key={campus.id} >
            <Link to={`/campuses/${campus.id}`}>
            <h3>{campus.campusName}</h3>
            <img className="homepic" src={campus.photo} />
            </Link>
          </div>
      )})}

      </div>
    );
  }
}
