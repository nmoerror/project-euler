const asyncHandler = require('../middleware/async');
const { ErrorResponse } = require('../middleware/error');
const Problem = require('../models/Problem');

// @desc      Get all supported problems
// @route     GET /api/problem
// @access    Public
exports.getAllProblems = asyncHandler(async (req, res, next) => {
  const problems = await Problem.find();
  res.status(200).json({ success: true, count: problems.length, data: problems });
});

// @desc      Create a new problem
// @route     POST /api/problem
// @access    Public
exports.createProblem = asyncHandler(async (req, res, next) => {
  const { name, title, question, answer } = req.body;

  const problem = await Problem.create({
    name,
    title,
    question,
    answer,
  });

  if (!problem) {
    return next(new ErrorResponse('Could not create problem', 500));
  }

  res.status(201).json({ success: true, data: problem });
});
