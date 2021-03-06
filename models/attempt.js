const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Please add a name'],
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  success: {
    type: Number,
    required: [true, 'Please provide success'],
    default: 0,
  },
  problem: {
    type: mongoose.Schema.ObjectId,
    ref: 'Problem',
    required: true,
  },
});

module.exports = mongoose.model('Attempt', AttemptSchema);
