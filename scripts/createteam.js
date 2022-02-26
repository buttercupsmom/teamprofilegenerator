const generateEmployees = (employee) => {
  console.log(employee);
  const index = [];

  const createManager = (Manager) => {
    console.log(Manager);
    let managerIndex = `
          <div class="card" style="width: 18rem;">
          <div class="card-header">
              ${Manager.name}</br>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${Manager.email}</li>
              <li class="list-group-item">${Manager.employeeId}</li>
              <li class="list-group-item">${Manager.officeNumber}</li>
          </ul>
      </div>`;
    index.push(managerIndex);
  };

  const createEngineer = (Engineer) => {
    console.log(Engineer);
    let engineerIndex = `
              <div class="card" style="width: 18rem;">
              <div class="card-header">
                  ${Engineer.name}</br>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${Engineer.email}</li>
                  <li class="list-group-item">${Engineer.employeeId}</li>
                  <li class="list-group-item">${Engineer.githubName}</li>
              </ul>
          </div>`;
    index.push(engineerIndex);
  };
  const createIntern = (Intern) => {
    console.log(Intern);
    let internIndex = `
          <div class="card" style="width: 18rem;">
          <div class="card-header">
              ${Intern.name}</br>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${Intern.email}</li>
              <li class="list-group-item">${Intern.employeeId}</li>
              <li class="list-group-item">${Intern.school}</li>
          </ul>
      </div>`;
    index.push(internIndex);
  };
  // conditional for loop for staff
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].acquirePosition === "Manager") {
      createManager(employee[i]);
    }
    if (employee[i].acquirePosition === "Engineer") {
      createEngineer(employee[i]);
    }
    if (employee[i].acquirePosition === "Intern") {
      createIntern(employee[i]);
    }
  }
  return fileHTML("");
};
