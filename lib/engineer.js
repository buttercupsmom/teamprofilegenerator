// require
const Employee = require("./employee");

// Engineer Class
class Engineer extends Employee {
  constructor(name, email, employeeId, githubName) {
    super(name, email, employeeId);

    this.githubName = githubName;
  }
  acquirePosition() {
    return this.Position;
  }
  acquireGithub() {
    return this.githubName;
  }
}

module.exports = Engineer;
