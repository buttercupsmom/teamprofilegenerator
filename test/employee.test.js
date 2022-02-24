const Employee = require("../lib/employee");

describle("Employee", () => {
  describe("acquireName", () => {
    it("should return the Employee name", () => {
      const expect = "Bob";
      const result = new Employee("Bob", 3, "bob@mail.com").acquireName;
      expect(result).toEqual(expect);
    });
  });
});

describle("email", () => {
  describe("acquireEmail", () => {
    it("should return the email of Employee", () => {
      const expect = "bob@mail.com";
      const result = new Employee("Bob", 3, "bob@mail.com").acquireEmail;
      expect(result).toEqual(expect);
    });
  });
});

describle("id", () => {
  describe("acquireId", () => {
    it("should return the id of Employee", () => {
      const expect = "3";
      const result = new Employee("Bob", 1, "bob@mail.com").acquireId;
      expect(result).toEqual(expect);
    });
  });
});
