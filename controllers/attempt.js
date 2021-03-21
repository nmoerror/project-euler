const Attempt = require('../models/attempt');
const {
  attemptUtils: { validateBody, createAttemptObject },
} = require('../utils/utils');

// @desc      Get all attempts
// @route     GET /api/attempt
// @access    Public
exports.getAllAttempts = (req, res, next) => {
  Attempt.getAttempts((attempts) => {
    res.send({
      data: attempts,
    });
  });
};

// @desc      Get top attempts
// @route     GET /api/user/top-attempts
// @access    Public
exports.getTopAttempts = (req, res, next) => {
  
};

// @desc      Submit a solution
// @route     POST /api/attempt/problem-1
// @access    Public
exports.attemptProblemOne = (req, res, next) => {
  validateBody(req.body);

  // TODO
  // find problemOne in database

  const attemptObject = createAttemptObject({ userName: req.body.name, isCorrect });

  new Attempt(attemptObject).save();

  if (req.headers.accept.includes('application/json')) {
    return res.status(201).send({
      succes: true,
      data: attemptObject,
    });
  }

  res.redirect('/');
};

// @desc      Submit a solution
// @route     POST /api/attempt/problem-3
// @access    Public
exports.attemptProblemThree = (req, res, next) => {
  validateBody(req.body);

  // TODO
  // find problemThree in database

  const attemptObject = createAttemptObject({ userName: req.body.name, isCorrect });

  new Attempt(attemptObject).save();

  res.status(201).send({
    succes: true,
    data: attemptObject,
  });
};
