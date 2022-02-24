//Inquirer
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// html generator
const generateHTML = {};
const { userInfo } = require("os");
const Employee = require("./lib/employee");
const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "staff.html");
// employee paths
const Manager = require("./lib/teamManager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
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
        case officeManager:
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
        case officeEngineer:
          // create engineer object
          const Engineer = new Engineer(
            answers.name,
            answers.email,
            answers.id,
            answers.officenumber,
            answer.github
          );
          officeTeam.push(Engineer);
          promptMenu();
          break;
        case officeManager:
          // create intern object
          const Intern = new Intern(
            answers.name,
            answers.email,
            answers.id,
            answers.officenumber,
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
          promptOfficeData();
          break;
        case "add Intern":
          promptOfficeData();
          break;
        default:
          assembleTeam();
      }
    });
};

// assemble team
const assembleTeam = () => {
  console.log("Assemble my Team!!");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateHTML(officeTeam), "utf-8");
};
// const generateHtml()

// write file to generate

promptMenu();
