const asyncHandler = require('../middleware/async');
const Attempt = require('../models/Attempt');
const Problem = require('../models/Problem');

const {
  attemptUtils: { validateBody },
} = require('../utils/utils');

// @desc      Get all attempts
// @route     GET /api/attempt
// @access    Public
exports.getAllAttempts = asyncHandler(async (req, res, next) => {
  const attempts = await Attempt.find().sort({ dateTime: -1 });
  res.status(200).json({ success: true, count: attempts.length, data: attempts });
});

// @desc      Get top attempts
// @route     GET /api/user/top-attempts
// @access    Public
exports.getTopAttempts = asyncHandler(async (req, res, next) => {
  const attempts = await Attempt.find().sort({ dateTime: -1 });

  if (!attempts) {
    return res.status(500).json({ success: false });
  }

  let top = res.status(200).json({ success: true, count: attempts.length, data: attempts });
});

// @desc      Submit a solution
// @route     POST /api/attempt/problem
// @access    Public
exports.attemptProblem = asyncHandler(async (req, res, next) => {
  validateBody(req.body);

  const problem = await Problem.findOne({ name: req.body.problemName });

  if (!problem) {
    return res.status(500).json({ success: false });
  }

  const attempt = await Attempt.create({
    userName: req.body.name,
    success: parseInt(req.body.solution) === problem.answer,
    problem: problem.id,
  });

  if (req.headers.accept.includes('application/json')) {
    return res.status(201).send({
      succes: true,
      data: attempt,
    });
  }

  res.redirect('/');
});
