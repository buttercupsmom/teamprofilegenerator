// Employee class

class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  acquireName() {
    return this.name;
  }
  acquireEmail() {
    return this.email;
  }
  acquireId() {
    return this.id;
  }
}

module.exports = Employee;
