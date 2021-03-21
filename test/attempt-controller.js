const expect = require('chai').expect;
const Attempt = require('../models/Attempt');
const attemptController = require('../controllers/attempt');
const mongoose = require('mongoose');

describe('Attempt Controller - getAllAttempts', function () {
  it('Should return an array', function () {
    before(function (done) {
      mongoose
        .connect('mongodb://mongo:27017/project-euler-node-server_TEST')
        .then(() => {
          const attempt = new Attempt({
            userName: 'test',
            success: 1,
            problem: '6056e4f805280000145c3b27',
          });
          return attempt.save();
        })
        .then(() => done());
    });

    attemptController
      .getAllAttempts({}, {}, () => {})
      .then((result) => {
        expect(result).to.be.an('array');
        Attempt.deleteMany({}).then(() => {
          return mongoose.disconnect();
        });
      });

    after(function () {
      Attempt.deleteMany()
        .then(() => mongoose.disconnect())
        .then(() => done());
    });
  });
});
