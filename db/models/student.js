'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const Campus = require('./campus')


module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
    defaultScope: {
      include: [
        {model: Campus}
      ]
    }
});

