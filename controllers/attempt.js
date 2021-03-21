const asyncHandler = require('../middleware/async');
const Attempt = require('../models/Attempt');
const Problem = require('../models/Problem');

// @desc      Get all attempts
// @route     GET /api/attempt
// @access    Public
exports.getAllAttempts = asyncHandler(async (req, res, next) => {
  const attempts = await Attempt.find().sort({ dateTime: -1 });
  res.status(200).json({ success: true, count: attempts.length, data: attempts });
});

// @desc      Get top 3 users
// @route     GET /api/attempt/top
// @access    Public
exports.getTopAttempts = asyncHandler(async (req, res, next) => {
  const attempts = await Attempt.aggregate([
    { $match: {} },
    {
      $group: {
        _id: '$userName',
        passed: { $sum: '$success' },
        attempts: { $sum: 1 },
      },
    },
    {
      $sort: {
        passed: -1,
        dateTime: -1,
        attempts: 1,
      },
    },
    {
      $limit: 3,
    },
  ]);

  res.status(200).json({ success: true, count: attempts.length, data: attempts });
});

// @desc      Submit a solution
// @route     POST /api/attempt
// @access    Public
exports.attemptProblem = asyncHandler(async (req, res, next) => {
  const { name, solution, problemName } = req.body;

  if (!name || !solution || !problemName) {
    return res.send('Please enter provide a name, a solution and a problem');
  }

  const problem = await Problem.findOne({ name: req.body.problemName });

  if (!problem) {
    return res.status(500).json({ success: false, message: 'Problem is not supported.' });
  }

  const attempt = await Attempt.create({
    userName: req.body.name,
    success: parseInt(req.body.solution) === problem.answer ? 1 : 0,
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
