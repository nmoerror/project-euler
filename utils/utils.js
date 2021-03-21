function validateBody({ name, solution }) {
  if (!name || !solution) {
    return res.send('Please enter provide a name and a solution.');
  }
}

module.exports = {
  attemptUtils: {
    validateBody,
  },
};
