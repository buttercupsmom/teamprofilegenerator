// require
const Employee = require("./employee");

// Intern Class
class Intern extends Employee {
  constructor(name, email, employeeId, school) {
    super(name, email, employeeId);

    this.school = school;
  }
  acquireSchool() {
    return this.school;
  }

  acquirePosition() {
    return this.Intern;
  }
}

module.exports = Intern;
