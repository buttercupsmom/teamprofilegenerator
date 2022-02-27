const Manager = require("../lib/teamManager");

describe(`manager`, () => {
  it(`should create a new manager object when initalized`, () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });
});

it(`should set name via the constructor`, () => {
  const employee = new Manager("Liz Lemon", "tatertotfreak@30rock.com", 1, 30);
  expect(employee.name).toBe("Liz Lemon");
});

it(`should return manager's name when acquireName method is called`, () => {
  const employee = new Manager("Liz Lemon", "tatertotfreak@30rock.com", 1, 30);
  expect(employee.acquireName()).toBe("Liz Lemon");
});

it(`should return the manager's email when acquireEmail method is called`, () => {
  const employee = new Manager("Liz Lemon", "tatertotfreak@30rock.com", 1, 30);
  expect(employee.acquireEmail()).toBe("tatertotfreak@30rock.com");
});

it(`should return the manager's Id when acquireId method is called`, () => {
  const employee = new Manager("Liz Lemon", "tatertotfreak@30rock.com", 1, 30);
  expect(employee.acquireId()).toBe(1);
});

it(`should return the manager's office number when acquireOfficeNumber method is called`, () => {
  const employee = new Manager("Liz Lemon", "tatertotfreak@30rock.com", 1, 30);
  expect(employee.acquireOfficeNumber()).toBe(30);
});

it(`should return the manager's position when acquirePosition method is called`, () => {
  const employee = new Manager("Liz Lemon", "tatertotfreak@30rock.com", 1, 30);
  expect(employee.acquirePosition()).toBe("Manager");
});
