//Inquirer
const inquirer = require("inquirer");
const fs = require("fs");
// employee paths
const Employee = require("./lib/employee");
const Manager = require("./lib/teamManager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// // positions
// const officeManager = Manager;
// const officeEngineer = Engineer;
// const officeIntern = Intern;
// Employee to be pushed into empty array
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
        when: (answers) => answers.position === "Manager",
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
        when: (answers) => answers.position === "Engineer",
        message: "Please enter your GitHub username.",
      },
      {
        type: "input",
        name: "school",
        when: (answers) => answers.position === "Intern",
        message: "Please enter your College or University.",
      },
    ])
    .then((answers) => {
      // questions response answers
      switch (answers.position) {
        case Manager:
          // create manager object
          const Manager = new Manager(
            answers.name,
            answers.email,
            answers.id,
            answers.officeNumber
          );
          officeStaff.push(Manager);
          officeData();
          break;

        case Engineer:
          // create engineer object
          const Engineer = new Engineer(
            answers.name,
            answers.email,
            answers.id,
            answer.githubName
          );
          console.log(employees);
          officeStaff.push(Engineer);
          officeData();
          break;
        case Intern:
          // create intern object
          const Intern = new Intern(
            answers.name,
            answers.email,
            answers.id,
            answers.school
          );
          officeStaff.push(Intern);
          officeData();
          break;
      }
    });
}
officeData();

// Prompt prompt menu
function promptMenu() {
  if (officeData === true) {
    (userChoice) => {
      switch (userChoice.menu) {
        case "Add Engineer":
          officeData(Engineer);
          break;
        case "Add Intern":
          officeData(Intern);
          break;
        default:
          createStaff();
      }
    };
  }
}
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
         ${generateEmployees(employees)}</br>
         ${makeCard(employees)}
      </div>
  </body>
  
  </html>`;
  fs.writeFile("./output/index.html", fileHTML, (err) =>
    err ? console.log(err) : console.log("HTML generated successfully!")
  );
};

const createStaff = () => {
  console.log(`Staff Assembled!`);
  generateHTML();
};

// module.exports = inquirer;
promptMenu();
