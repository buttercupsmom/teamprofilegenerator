//Inquirer
const inquirer = require("inquirer");
const fs = require("fs");
// employee paths
const Manager = require("./lib/teamManager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// const createHtml = require("create-html");
// positions
const officeManager = Manager;
const officeEngineer = Engineer;
const officeIntern = Intern;
// Employee to be pushed into empty array
const officeTeam = [];

// prompt for position
const promptOfficeData = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (acquireName) => {
          if (acquireName) {
            return true;
          } else {
            console.log("Enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: (acquireEmail) => {
          if (acquireEmail) {
            return true;
          } else {
            console.log("Enter your Email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please enter your employee Id.",
        validate: (acquireId) => {
          if (acquireId) {
            return true;
          } else {
            console.log("Please enter your employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        when: () => employeeType === officeManager,
        message: "Please enter your office number.",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Enter your office number.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubName",
        when: () => employeeType === officeEngineer,
        message: "Please enter your GitHub username.",
      },
      {
        type: "input",
        name: "school",
        when: () => employeeType === officeIntern,
        message: "Please enter your College or University.",
      },
    ])
    .then((answers) => {
      // questions response answers
      switch (employeeType) {
        case Manager:
          // create manager object
          const Manager = new Manager(
            answers.name,
            answers.email,
            answers.id,
            answers.officenumber
          );
          officeTeam.push(Manager);
          promptMenu();
          break;
        case Engineer:
          // create engineer object
          const Engineer = new Engineer(
            answers.name,
            answers.email,
            answers.id,
            answer.github
          );
          officeTeam.push(Engineer);
          promptMenu();
          break;
        case Intern:
          // create intern object
          const Intern = new Intern(
            answers.name,
            answers.email,
            answers.id,
            answers.school
          );
          officeTeam.push(Intern);
          promptMenu();
          break;
      }
    });
};

// Prompt prompt menu
const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "What is the title of the employee you wish to add?",
        choices: ["Engineer", "Intern", "Build Your Team!"],
      },
    ])
    .then((answers) => {
      switch (answers.menu) {
        case "add Engineer":
          promptOfficeData(officeEngineer);
          break;
        case "add Intern":
          promptOfficeData(officeIntern);
          break;
        case "Build Your Office Team!":
          generateHTML(officeTeam);
        default:
          throw new Error("Choice not applicable.");
          break;
      }
    });
};

// either make card for each staff position or conditionals
function makeCard(staff) {
  let cardHTML = "";
  // loop
  // conditional in for each loop
  staff.forEach((staff) => {
    console.log(staff);
    // this will be a div with css attributes
    cardHTML += `<div>My name is ${staff.acquireName()}.</div`;
  });
  return cardHTML;
}

const generateHTML = (employees) => {
  const fileHTML = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous">">
  </head>
  
  <body>
      <div class="card" style="width: 18rem;">
          <div class="card-header">
           </br>
          </div>
         ${makeCard(employees)}
      </div>
  </body>
  
  </html>`;
  fs.writeFile("./output/index.html", fileHTML, (err) =>
    err ? console.log(err) : console.log("HTML generated successfully!")
  );
};

// const generateHtml()
const generateEmployee = (employee) => {
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
  return index.join("");
};
