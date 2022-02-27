const Engineer = require("../lib/engineer");

describe(`engineer`, () => {
  it(`should create a new engineer object when initalized`, () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });
});

it(`should set name via the constructor`, () => {
  const employee = new Engineer(
    "Tracy Jordan",
    "tracyjordan@30rock.com",
    2,
    "tracyjordangithub"
  );
  expect(employee.name).toBe("Tracy Jordan");
});

it(`should return the employee's name when acquireName method is called`, () => {
  const employee = new Engineer(
    "Tracy Jordan",
    "tracyjordan@30rock.com",
    2,
    "tracyjordangithub"
  );
  expect(employee.acquireName()).toBe("Tracy Jordan");
});

it(`should return the employee's email when acquireEmail method is called`, () => {
  const employee = new Engineer(
    "Tracy Jordan",
    "tracyjordan@30rock.com",
    2,
    "tracyjordangithub"
  );
  expect(employee.acquireEmail()).toBe("tracyjordan@30rock.com");
});

it(`should return the employee's Id when acquireId method is called`, () => {
  const employee = new Engineer(
    "Tracy Jordan",
    "tracyjordan@30rock.com",
    2,
    "tracyjordangithub"
  );
  expect(employee.acquireId()).toBe(2);
});

it(`should return the employee's GitHub Username when acquireGithub method is called`, () => {
  const employee = new Engineer(
    "Tracy Jordan",
    "tracyjordan@30rock.com",
    2,
    "tracyjordangithub"
  );
  expect(employee.acquireGithub()).toBe("tracyjordangithub");
});

it(`should return the employee's position when acquirePosition method is called`, () => {
  const employee = new Engineer(
    "Tracy Jordan",
    "tracyjordan@30rock.com",
    2,
    "tracyjordangithub"
  );
  expect(employee.acquirePosition()).toBe("Engineer");
});
