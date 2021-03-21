const express = require('express');
const router = express.Router();
const { getAllAttempts, attemptProblem, getTopAttempts } = require('../controllers/attempt');

router.route('/').get(getAllAttempts).post(attemptProblem);
router.route('/top').get(getTopAttempts);

module.exports = router;
