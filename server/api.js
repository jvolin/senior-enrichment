'use strict'
const api = require('express').Router();
const db = require('../db');
const models = require('../db/models');
const Campus = require('../db/models/campus');
const Student = require('../db/models/student');



// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))


// CAMPUS /////////////////////////////////

// get all campuses
api.get('/campuses', (req, res, next) => {
	Campus.findAll({order: '"campusName" ASC' })
    .then(campuses => res.json(campuses))
    .catch(next);
})

//get a campus by id

// add a campus

// edit a campus

// delete a campus

// STUDENT /////////////////////////////////

// get all students
api.get('/students', (req, res, next) => {
	Student.findAll({order: '"lastName" ASC' })
    .then(students => res.json(students))
    .catch(next);
})

// get a student by Id
api.get('/students/:id', (req, res, next) => {
    let studentId = req.params.id;
    Student.findById(studentId)
    .then(student => res.json(student))
    .catch(next);
})

// add a student
api.post('/students/add', (req, res, next) => {
    Student.create({
        firstName: req.body.fistName,
        lastName: req.body.lastName,
        email: req.body.email,
        photo: req.body.photo,
        bio: req.body.bio,
        campusId: req.body.campusId,
    })
    .then( student => res.json(student))
    .catch(next);
})

// edit a student

// delete a student


module.exports = api
