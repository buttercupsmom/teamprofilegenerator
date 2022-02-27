// Employee class
class Employee {
  constructor(name, email, employeeId) {
    this.name = name;
    this.email = email;
    this.employeeId = employeeId;
  }

  acquireName() {
    return this.name;
  }
  acquireEmail() {
    return this.email;
  }
  acquireId() {
    return this.employeeId;
  }
  acquirePosition() {
    return "Employee";
  }
}

module.exports = Employee;
