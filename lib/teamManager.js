// require
const Employee = require("./employee");

// Team Manager Class
class Manager extends Employee {
  constructor(name, email, employeeId, officeNumber) {
    super(name, email, employeeId);

    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getPosition() {
    return "Manager";
  }
}

module.exports = Manager;
