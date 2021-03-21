const Attempt = require('../models/Attempt');
const {
  attemptUtils: { validateBody, createAttemptObject },
} = require('../utils/utils');

// @desc      Get all attempts
// @route     GET /api/attempt
// @access    Public
exports.getAllAttempts = (req, res, next) => {};

// @desc      Get top attempts
// @route     GET /api/user/top-attempts
// @access    Public
exports.getTopAttempts = (req, res, next) => {};

// @desc      Submit a solution
// @route     POST /api/attempt/problem-1
// @access    Public
exports.attemptProblemOne = (req, res, next) => {
  validateBody(req.body);

  // TODO
  // find problemOne in database

  const attemptObject = createAttemptObject({ userName: req.body.name, isCorrect });
  if (req.headers.accept.includes('application/json')) {
    return res.status(201).send({
      succes: true,
      data: 'TODO',
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
  if (req.headers.accept.includes('application/json')) {
    res.status(201).send({
      succes: true,
      data: 'TODO',
    });
  }

  res.redirect('/');
};
