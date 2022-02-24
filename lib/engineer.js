// require
const Employee = require("./employee");

// Engineer Class
class Engineer extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);

    this.officeNumber = officeNumber;
    this.position = "Engineer";
  }
}

module.exports = Engineer;
