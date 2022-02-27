//Inquirer
const inquirer = require("inquirer");
const fs = require("fs");
// employee paths
const Employee = require("./lib/employee");
const Manager = require("./lib/teamManager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const officeStaff = [];

// prompt for position
function officeData() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "What is the title of the employee you wish to add?",
        choices: ["Engineer", "Intern", "Build Your Team!"],
      },
      {
        type: "input",
        name: "name",
        message: "What their name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your employee's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is their email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your employee's email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please your employee's Id.",
        validate: (employeeId) => {
          if (employeeId) {
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
        when: (answers) => answers.position === "Manager",
        message: "Please enter your office number.",
        validate: (acquireofficeNumber) => {
          if (acquireofficeNumber) {
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
        when: (answers) => answers.position === "Engineer",
        message: "Please enter your employee's GitHub username.",
      },
      {
        type: "input",
        name: "school",
        when: (answers) => answers.position === "Intern",
        message: "Please enter your intern's College or University.",
      },
    ])
    .then((answers) => {
      // questions response answers
      if (answers.position === "Manager") {
        // create manager object
        const manager = new Manager(
          answers.name,
          answers.email,
          answers.employeeId,
          answers.officeNumber
        );
        officeStaff.push(manager);
        officeData();
      } else if (answers.position === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.email,
          answers.employeeId,
          answers.githubName
        );
        officeStaff.push(engineer);
        officeData();
      } else if (answers.position === "Intern") {
        const intern = new Intern(
          answers.name,
          answers.email,
          answers.employeeId,
          answers.school
        );
        officeStaff.push(intern);
        officeData();
      } else {
        const staffAssemble = generateHTML();

        fs.writeFile("./output/index.html", staffAssemble, (err) =>
          err ? console.log(err) : console.log("HTML generated successfully!")
        );
      }
    });
}

function generateUnique() {
  if (employee.acquirePosition() === "Manager") {
    return `<li class="list-group-item">${employee.officeNumber}</li>`;
  } else if (employee.acquirePosition() === "Engineer") {
    return `<li class="list-group-item">${employee.githubName}</li>`;
  } else if (employee.acquirePosition() === "Intern") {
    return `<li class="list-group-item">${employee.school}</li>`;
  }
}

// either make card for each staff position or conditionals
function makeCard(staff) {
  let cardHTML = "";
  // loop
  // conditional in for each loop
  staff.forEach((staff) => {
    console.log();
    // this will be a div with css attributes
    cardHTML += `<div class="card" style="width: 18rem;">
    <div class="card-header">${answers.name}</br>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${answers.email}</li>
        <li class="list-group-item">${answers.employeeId}</li>
        <li class="list-group-item">${generateUnique(staff)}</li>
    </ul>
    `;
  });
  return cardHTML;
}

const generateHTML = () => {
  return `<!DOCTYPE html>
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
  <h1>My Staff</h1>


  ${makeCard()};
  </body>
  
  </html>`;
};

officeData();
