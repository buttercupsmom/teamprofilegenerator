// Employee class

class Employee {
  constructor(name, email, employeeId, position) {
    this.name = name;
    this.email = email;
    this.employeeId = employeeId;
    this.position = position;
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
    return this.position;
  }
}

module.exports = Employee;
