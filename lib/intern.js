// require
const Employee = require("./employee");

// Intern Class
class Intern extends Employee {
  constructor(name, email, id, school) {
    super(name, email, id);

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
