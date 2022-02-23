class Employee {
  constructor(name, email, id) {
    this.name = name;
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      this.email;
    } else {
      this.email = "Please enter valid email.";
    }
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
  acquirePosition() {
    return this.position;
  }
}

module.exports = Employee;
