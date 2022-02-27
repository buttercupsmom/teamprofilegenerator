const Intern = require("../lib/intern");

describe(`intern`, () => {
  it(`should create a new intern object when initalized`, () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });
});

it(`should set name via the constructor`, () => {
  const employee = new Manager(
    "Kenneth Parcel",
    3,
    "kennethparcell@30rock.com",
    "University of NBC Page Department"
  );
  expect(employee.name).toBe("Tracy Jordan");
});

it(`should return intern's name when acquireName method is called`, () => {
  const employee = new Intern(
    "Kenneth Parcell",
    3,
    "kennethparcell@30rock.com",
    "University of NBC Page Department"
  );
  expect(employee.acquireName()).toBe("Kenneth Parcell");
});

it(`should return the employee's email when acquireEmail method is called`, () => {
  const employee = new Intern(
    "Kenneth Parcell",
    3,
    "kennethparcell@30rock.com",
    "University of NBC Page Department"
  );
  expect(employee.acquireEmail()).toBe("kennethparcell@30rock.com");
});

it(`should return employee's Id when acquireId method is called`, () => {
  const employee = new Intern(
    "Kenneth Parcell",
    3,
    "kennethparcell@30rock.com",
    "University of NBC Page Department"
  );
  expect(employee.acquireId()).toBe(3);
});

it(`should return employee's college of university when acquireSchool method is called`, () => {
  const employee = new Intern(
    "Kenneth Parcell",
    3,
    "kennethparcell@30rock.com",
    "University of NBC Page Department"
  );
  expect(employee.acquireSchool()).toBe("University of NBC Page Department");
});

it(`should return position when acquirePosition method is called`, () => {
  const employee = new Intern(
    "Kenneth Parcell",
    3,
    "kennethparcell@30rock.com",
    "University of NBC Page Department"
  );
  expect(employee.acquirePosition()).toBe("Intern");
});
