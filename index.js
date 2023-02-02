// const fs = require('fs');
import * as fs from "fs";

// const inquirer = require('inquirer');
import inquirer from "inquirer";

// How can I validate that a user input their email when using Inquirer npm?
// https://stackoverflow.com/a/65190730/9095603
import * as EmailValidator from "email-validator";

import { Employee } from "./lib/Employee.js";
import { Manager } from "./lib/Manager.js";
import { Engineer } from "./lib/Engineer.js";
import { Intern } from "./lib/Intern.js";
// import { exit } from "process";

import { injectHtml2Template } from "./src/cards.js";

var newManager;

// ./ is a relative path
// / is an absolute path
// JavaScript ES6 Modules (export/import)
// https://youtu.be/cRHQNNcYf6s

// Error [ERR_MODULE_NOT_FOUND]: Cannot find module
// This Happens because when using ES Modules we are enforced to specify the file extension in the import statement
// https://stackoverflow.com/a/69694616/9095603

// var engineer = new Engineer (101, 'The Name', 'peta@google.com', 'peta_butter');

// console.log(engineer.email)
// console.log(engineer.id)
// console.log(engineer.name)
// console.log(engineer.ghUserName)

var emailValidate = (email) => {
  if (EmailValidator.validate(email)) {
    email = email;
    return true;
  } else {
    return "Invalid email format - please try again to enter a valid email address.";
  }
};

function commonQuestions(employeeType) {
  const commonQuestionsArray = [
    {
      name: "id",
      message: `What is the ${employeeType}'s ID number?`,
      type: "input",
    },
    {
      name: "name",
      message: `What is the ${employeeType}'s name?`,
      type: "input",
    },
    {
      type: "input",
      message: `What is the ${employeeType}'s email address?`,
      name: "email",
      validate: emailValidate,
      // true
    },
  ];
  return commonQuestionsArray;
}

const nextTypeQuestion = [
  {
    name: "type",
    message: "Which type of employee do you wish to add now?",
    type: "list",
    choices: ["Engineer", "Intern", "None - I am done now"],
  },
];

// console.log(managerQuestions.isArray());

function employeeQuestions(employeeType) {
  const commonQuestionsArray = [
    {
      name: "id",
      message: `What is the ${employeeType}'s ID number?`,
      type: "input",
    },
    {
      name: "name",
      message: `What is the ${employeeType}'s name?`,
      type: "input",
    },
    {
      type: "input",
      message: `What is the ${employeeType}'s email address?`,
      name: "email",
      validate: emailValidate,
      // true
    },
  ];

  const managerQuestions = [
    {
      type: "input",
      message: "What is the managers's office number?",
      name: "office",
    },
  ];

  const engineerQuestions = [
    {
      type: "input",
      message: "What is the engineer's GitHub username?",
      name: "ghUsername",
    },
  ];

  const internQuestions = [
    {
      type: "input",
      message: "What is the intern's school?",
      name: "school",
    },
  ];

  switch (employeeType) {
    case "manager":
      var managerCombinedQuestions = commonQuestionsArray;
      managerCombinedQuestions.push(...managerQuestions);
      // How to extend an existing JavaScript array with another array, without creating a new array
      // https://stackoverflow.com/a/1374131/9095603
      return managerCombinedQuestions;

    case "engineer":
      var engineerCombinedQuestions = commonQuestionsArray;
      engineerCombinedQuestions.push(...engineerQuestions);
      // How to extend an existing JavaScript array with another array, without creating a new array
      // https://stackoverflow.com/a/1374131/9095603
      return engineerCombinedQuestions;

    case "intern":
      var internCombinedQuestions = commonQuestionsArray;
      internCombinedQuestions.push(...internQuestions);
      // How to extend an existing JavaScript array with another array, without creating a new array
      // https://stackoverflow.com/a/1374131/9095603
      return internCombinedQuestions;
  }
}

// console.info() : https://stackoverflow.com/a/10571701/9095603

var engineers = [];
var interns = [];

async function askToAdd() {
  var nextType = await inquirer.prompt(nextTypeQuestion);

  if (nextType.type === "Engineer") {
    var engineerAnswers = await inquirer
      .prompt(employeeQuestions("engineer"))
      .then((engineerAnswers) => {
        var newEngineer = new Engineer(
          engineerAnswers.id,
          engineerAnswers.name,
          engineerAnswers.email,
          engineerAnswers.ghUsername
        );
        engineers.push(newEngineer);
      })
      .then((answers) => askToAdd());
  }
  if (nextType.type === "Intern") {
    await inquirer
      .prompt(employeeQuestions("intern"))
      .then((internAnswers) => {
        var newIntern = new Intern(
          internAnswers.id,
          internAnswers.name,
          internAnswers.email,
          internAnswers.school
        );
        interns.push(newIntern);
      })
      .then((answers) => askToAdd());
  } else if (nextType.type === "None - I am done now") {
    var allEmployees = [newManager, ...engineers, ...interns];

    // injectHtml2Template(allEmployees);

    // Write the string to a file

    fs.writeFile(
      `./dist/index.html`,
      injectHtml2Template(allEmployees),
      (err) =>
        err
          ? console.error(err)
          : console.log(`Content has been written to HTML file`)
    );
    console.log("I will generate the page now");
  }
}

async function prompts() {
  let managerAnswers = await inquirer.prompt(employeeQuestions("manager"));
  newManager = new Manager(
    managerAnswers.id,
    managerAnswers.name,
    managerAnswers.email,
    managerAnswers.office
  );
  askToAdd(newManager);
}

prompts();
