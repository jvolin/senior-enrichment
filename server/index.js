const express = require('express');
const router = express.Router();

router.use('/students', require('./students'));
router.use('/campuses', require('./campuses'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});
