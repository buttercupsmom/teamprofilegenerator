// require
const Employee = require("./employee");

// Team Manager Class
class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);

    this.officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getPosition() {
    return "Manager";
  }
}

module.exports = Manager;
