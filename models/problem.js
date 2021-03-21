const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Please add a problem name'],
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  question: {
    type: String,
    required: [true, 'Please provide a question'],
  },
  answer: {
    type: Number,
    required: [true, 'Please provide a problem solution'],
  },
});

module.exports = mongoose.model('Problem', ProblemSchema);
