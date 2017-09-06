import { combineReducers } from 'redux';
import axios from 'axios';

const initialState = {
  campuses: [],
  campus: [],
  students: [],
  student: [],
  campusStudents: [],
}


// action types
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUS_STUDENTS = 'GET_CAMPUS_STUDENTS';


// action creators
export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}
export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getCampusStudents (campusStudents) {
  const action = { type: GET_CAMPUS_STUDENTS, campusStudents };
  return action;
}

// thunks
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

export function fetchCampus (id) {
  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(campus => {
        const action = getCampus(campus);
        dispatch(action);
      });
  };
}

export function fetchStudents() {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

export function fetchCampusStudents (campusId) {
  return function thunk (dispatch) {
    return axios.get(`/api/students/${campusId}`)
      .then(res => res.data)
      .then(campusStudents => {
        const action = getCampusStudents(campusStudents);
        dispatch(action);
      });
  };
}

// reducer

export default function rootReducer (state = initialState, action) {
  switch (action.type) {

    case GET_CAMPUSES:{
      return Object.assign({}, state, {campuses: state.campuses.concat(action.campuses)})
    }
    case GET_CAMPUS:
    return Object.assign({}, state, {campus: action.campus})

    case GET_STUDENTS:
      return Object.assign({}, state, {students: state.students.concat(action.students)})

    case GET_STUDENT:
    return Object.assign({}, state, {student: action.student})

    case GET_CAMPUS_STUDENTS:
      return Object.assign({}, state, {campusStudents: state.campusStudents.concat(action.campusStudents)})

    default:
      return state;
  }

}

