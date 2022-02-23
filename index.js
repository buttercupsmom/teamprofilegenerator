// employee classes
const teamManager = require("./lib/teamManager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//Inquirer
const inquirer = require("inquirer");

// file paths
const path = require("path");
const fs = require("fs");

// html generator
const generateHTML = require("generateHTML");
const { userInfo } = require("os");

// Employee to be pushed into empty array
const teamPosition = [];

// prompt for position
const promptPosition = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "position",
      message: "What is the title of the employee you wish to add?",
      choices: ["Engineer", "Intern", "Add new Title"],
    },
  ]);
};

// Prompt for additional information

const promptAdditionalInfo = (position) => {
  if (position === "Generate Team Page") {
    writeHTMLtoFile(teamPosition);
  } else {
    const questions = workerQuestions(position);
    inquirer.prompt(questions).then((userInfo) => {
      userInfo.position = position;
      teamPosition.push(userInfo);
      addNewEmployee();
    });
  }
};

const addNewEmployee = () => {
  console.clear();
  promptPosition().then((userInfo) => {
    const { position } = userInfo;
    promptAdditionalInfo(position);
  });
};

promptAdditionalInfo("Team Manager");
