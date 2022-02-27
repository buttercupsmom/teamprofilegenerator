// require
const Employee = require("./employee");

// Team Manager Class
class Manager extends Employee {
  constructor(name, email, employeeId, officeNumber) {
    super(name, email, employeeId);

    this.officeNumber = officeNumber;
  }
  acquireOfficeNumber() {
    return this.officeNumber;
  }
  acquirePosition() {
    return "Manager";
  }
}

module.exports = Manager;
