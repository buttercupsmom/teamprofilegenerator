// require
const Employee = require("./employee");

// Team Manager Class
class Manager extends Employee {
  constructor(name, email, employeeId, officeNumber) {
    super(name, email, employeeId);

    this.officeNumber = officeNumber;
  }

  acquirePosition() {
    return this.Position;
  }
  acquireOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
