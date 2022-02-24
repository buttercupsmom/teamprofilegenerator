// require
const Employee = require("./employee");

// Engineer Class
class Engineer extends Employee {
  constructor(name, email, id, githubName) {
    super(name, email, id);

    this.githubName = githubname;
  }
  acquireGithub() {
    return this.githubName;
  }
  acquirePosition() {
    return this.Engineer;
  }
}

module.exports = Engineer;
