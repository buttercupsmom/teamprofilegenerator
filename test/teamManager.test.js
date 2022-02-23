// require
const Employee = require("./employee");

// Team Manager Class
class teamManager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);

    this.officeNumber = officeNumber;
    this.position = "Team Manager";
  }
}

module.exports = teamManager;
