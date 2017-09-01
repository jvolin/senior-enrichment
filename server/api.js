'use strict'
const api = require('express').Router()
const db = require('../db')
const models = require('../db/models');
const Student = require('../db/models/student');
const Campus = require('../db/models/campus');


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))


// get all students
api.get('/students', (req, res, next) => {
	Student.findAll()
    .then(students => res.json(students))
    .catch(next);
})


// get all campuses
api.get('/campuses', (req, res, next) => {
	Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})

module.exports = api
