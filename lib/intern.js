// require
const Employee = require("./employee");

// Intern Class
class Intern extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);

    this.officeNumber = officeNumber;
    this.position = "Intern";
  }
}

module.exports = Intern;
