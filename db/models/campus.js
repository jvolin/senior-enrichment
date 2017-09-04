'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  campusName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
})
