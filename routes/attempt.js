const express = require('express');
const router = express.Router();
const { getAllAttempts, attemptProblemOne, attemptProblemThree } = require('../controllers/attempt');

router.route('/').get(getAllAttempts);
router.route('/problem-1').post(attemptProblemOne);
router.route('/problem-3').post(attemptProblemThree);

module.exports = router;
