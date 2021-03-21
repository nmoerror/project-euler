const express = require('express');
const router = express.Router();
const { getAllProblems, createProblem } = require('../controllers/problem');

router.route('/').get(getAllProblems).post(createProblem);

module.exports = router;
