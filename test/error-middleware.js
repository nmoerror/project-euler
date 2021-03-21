const expect = require('chai').expect;
const { errorHandler } = require('../middleware/error');

describe('Error Middleware', function () {
  const res = {
    success: false,
    statusCode: 500,
    error: null,
    status: function (statusCode) {
      this.statusCode = statusCode;
      return this;
    },
    json: function (data) {
      this.error = data.error;
      this.success = false;
    },
  };

  it('Should throw "Resource not found" if err.name is CastError', function () {
    const err = {
      name: 'CastError',
      message: 'Server Error',
    };

    errorHandler(err, {}, res, () => {});

    expect(res.error).to.be.equal('Resource not found');
  });

  it('Should throw "Duplicate field value entered" if err.code is 11000', function () {
    const err = {
      message: 'Server Error',
      code: 11000,
    };

    errorHandler(err, {}, res, () => {});

    expect(res.error).to.be.equal('Duplicate field value entered');
  });

  it('Should have an error property', function () {
    const err = {
      message: 'Server Error',
    };

    errorHandler(err, {}, res, () => {});

    expect(res).to.have.property('error');
  });
});
