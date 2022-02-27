const Employee = require("../lib/employee");

describe("employee", () => {
  it(`should create a new employee object when initalized`, () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
});

it(`should set name via the constructor`, () => {
  const employee = new Employee("Liz Lemon", 1, "lizlemon@30rock.com");
  expect(employee.name).toBe("Liz Lemon");
});

it(`should return the name when acquireName method is called`, () => {
  const employee = new Employee("Liz Lemon", 1, "lizlemon@30rock.com");
  expect(employee.acquireName()).toBe("Liz Lemon");
});

it(`should return the employee's email when acquireEmail method is called`, () => {
  const employee = new Employee("Liz Lemon", 1, "lizlemon@30rock.com");
  expect(employee.acquireEmail()).toBe("lizlemon@30rock.com");
});

it(`should return the employee's Id when acquireId method is called`, () => {
  const employee = new Employee("Liz Lemon", 1, "lizlemon@30rock.com");
  expect(employee.acquireId()).toBe(1);
});

it(`should return the employee's position when acquirePosition method is called`, () => {
  const employee = new Employee("Liz Lemon", 1, "lizlemon@30rock.com");
  expect(employee.acquirePosition()).toBe("Employee");
});
