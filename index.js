//Inquirer
const inquirer = require("inquirer");
const fs = require("fs");

const siteGenerate = [];
const output_dir = path.resolve(_dirname, "output");
const outputSite = path.join(output_dir, "company.html");
// employee paths
const Manager = require("./lib/teamManager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const createHtml = require("create-html");
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
    .then((userPick) => {
      switch (userPick.menu) {
        case "add Engineer":
          promptOfficeData(Engineer);
          break;
        case "add Intern":
          promptOfficeData(Intern);
          break;
        case "Build Your Office Team!":
          generateHTML(officeTeam);
        default:
          throw new Error("Choice not applicable.");
          break;
      }
    });
};

// either make card for each position or conditionals
function makeCard(worker) {
  let cardHTML = "";
  // loop
  workers.forEach((worker) => {
    console.log(worker);
    // this will be a div with css attributes
    cardHTML += `<div>My name is ${worker.name}</div`;
  });
  return cardHTML;
}

// assemble team
const assembleOfficeTeam = () => {
  if (!fs.existsSync(output_dir)) {
    fs.mkdirSync(output_dir);
  }
  fs.writeFileSync(outputSite, siteGenerate(officeTeam), "utf-8");
  console.log("Assemble my Team!!");
};
// const generateHtml()
const generateHTML = (employees) => {
  // pass an array of employees
  console.log() // html index info // template literal will go in body of html
  `${makeCard(employees)}`;
};

// write file to generate

promptMenu();
