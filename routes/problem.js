const express = require('express');
const router = express.Router();
const { getAllProblems } = require('../controllers/problem');

router.route('/').get(getAllProblems);

module.exports = router;
