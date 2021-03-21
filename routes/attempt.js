const express = require('express');
const router = express.Router();
const { getAllAttempts, attemptProblem, getTopAttempts } = require('../controllers/attempt');

router.route('/').get(getAllAttempts);
router.route('/top').post(getTopAttempts);
router.route('/problem').post(attemptProblem);

module.exports = router;
