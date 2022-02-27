// require
const Employee = require("./employee");

// Intern Class
class Intern extends Employee {
  constructor(name, email, employeeId, school) {
    super(name, email, employeeId);

    this.school = school;
  }

  acquirePosition() {
    return this.Position;
  }
  acquireSchool() {
    return this.school;
  }
}

module.exports = Intern;
