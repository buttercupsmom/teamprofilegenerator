// require
const Employee = require("./employee");

// Engineer Class
class Engineer extends Employee {
  constructor(name, email, employeeId, githubName) {
    super(name, email, employeeId);

    this.githubName = githubName;
  }
  acquireGithub() {
    return this.githubName;
  }
  acquirePosition() {
    return "Engineer";
  }
}

module.exports = Engineer;
