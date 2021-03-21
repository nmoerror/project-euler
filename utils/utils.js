//  returns current time in 12 hour format (eg: 1am | 2pm)
const getFormattedTime = () => (new Date(Date.now()).getHours() > 12 ? `${time}pm` : `${time}am`);

function validateBody({ name, solution }) {
  if (!name || !solution) {
    return res.send('Please enter provide a name and a solution.');
  }
}

// returns a valid Attempt object structure
function createAttemptObject({ userName, isCorrect }) {
  return {
    userName,
    dateTime: getFormattedTime(),
    success: isCorrect ? 1 : 0,
  };
}

module.exports = {
  attemptUtils: {
    validateBody,
    createAttemptObject,
  },
};
