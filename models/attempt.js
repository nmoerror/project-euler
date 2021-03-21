const fs = require('fs');
const path = require('path');
const database = path.join(__dirname, '..', 'data', 'database.json');

module.exports = class Attempt {
  constructor(data) {
    this.userName = data.userName;
    this.dateTime = data.dateTime;
    this.success = data.success;
  }

  save() {
    Attempt.getAttempts((data) => {
      const problems = [...data, this];
      fs.writeFile(database, JSON.stringify(problems), (error) => {
        console.log(error);
      });
    });
  }

  static getAttempts = (callBack) => {
    fs.readFile(database, (error, data) => {
      if (error) {
        console.log(error);
        return callBack([]);
      }

      return callBack(JSON.parse(data));
    });
  };
};
