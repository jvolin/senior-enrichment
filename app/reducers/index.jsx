import { combineReducers } from 'redux';
import axios from 'axios';

const initialState = {
  campuses: []
}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
};

// action types
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';


// action creators
export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

// thunk
export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

// reducer

export function reducer (state = initialState, action) {

  switch (action.type) {

    case GET_CAMPUSES:
      return Object.assign({}, state, {campuses: state.campuses.concat(action.campuses)})

    case GET_CAMPUS:
    return Object.assign({}, state, {campus: action.campuses})

    default:
      return state;
  }

}

export default rootReducer
