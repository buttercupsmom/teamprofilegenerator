//Inquirer
const inquirer = require("inquirer");
const fs = require("fs");
// employee paths
// const Employee = require("./lib/employee");
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
        choices: ["Manager", "Engineer", "Intern", "Build Your Team!"],
      },
      {
        type: "input",
        name: "name",
        when: (answers) => answers.position != "Build Your Team!",
        message: "What their name?",
      },
      {
        type: "input",
        name: "email",
        when: (answers) => answers.position != "Build Your Team!",
        message: "What is their email?",
      },
      {
        type: "input",
        name: "employeeId",
        when: (answers) => answers.position != "Build Your Team!",
        message: "Please your employee's Id.",
      },
      {
        type: "input",
        name: "officeNumber",
        when: (answers) => answers.position === "Manager",
        message: "Please enter your office number.",
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
        console.log(staffAssemble);
        fs.writeFile("index.html", staffAssemble, (err) =>
          err ? console.log(err) : console.log("HTML generated successfully!")
        );
      }
    });
}

function generateUnique(employee) {
  if (employee.acquirePosition() === "Manager") {
    return `<p class="card-text">${employee.officeNumber}</p></br>`;
  } else if (employee.acquirePosition() === "Engineer") {
    return `<p class="card-text">${employee.githubName}</p></br>`;
  } else if (employee.acquirePosition() === "Intern") {
    return `<p class="card-text">${employee.school}</p></br>`;
  }
}

// either make card for each staff position or conditionals
function makeCard() {
  let cardHTML = "";
  // loop
  // conditional in for each loop
  officeStaff.forEach((employee) => {
    console.log();
    // this will be a div with css attributes
    cardHTML += `<div class="card m-1 p-1">
    <h2 class="card-header">${employee.name}</br>
    </h2>
    
        <div class="card-body">
            <p class="card-text">${employee.email}</p>
            <p class="card-text">${employee.employeeId}</p>
            <p class="card-text">${generateUnique(employee)}</p>
        </div>`;
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
          crossorigin="anonymous">
      <link rel="stylesheet" href="./assets/css/style.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
  </head>
  
  <body>
  <header class="align-self-center jumbotron">
  <h1>My Staff</h1>
  </header>
  <div id="staffCardBio" class="no-gutters">

  ${makeCard()};

  </div>
  </body>
  
  </html>`;
};

officeData();
