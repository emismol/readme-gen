// TODO: Include packages needed for this application
    var inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
    var generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {type: "input", 
    name: "title",
    message: "Please enter the project title"},
    {type: "input", 
    name: "description",
    message:"Please enter the project description"},
    {type: "input", 
    name: "install",
    message:"Please enter the project installation instructions"},
    {type: "input", 
    name: "usage",
    message:"Please enter the project usage information"},
    {type: "input", 
    name: "guidelines",
    message: "Please enter the project guidelines"},
    {type: "input", 
    name: "test",
    message:"Please enter the project test instructions"},
    {type: "input", 
    name: "email",
    message:"Please enter your email information"},
    {type: "list", 
    name: "license",
    message:"Please enter license information",
    choices:["Apache_2.0","gpl-3.0","MIT"]
    },
    {type: "input", 
    name: "git",
    message:"Please enter your GitHub information"}
];

// TODO: Create a function to write README file
var fs = require ("fs");
function writeToFile(FileName, data) {
    fs.writeFileSync('./dist/ReadMe.md', data, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}

// TODO: Create a function to initialize app
function init() {
    console.log("hello")
    inquirer
  .prompt(
    questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    const readMeInfo = generateMarkdown(answers)//with object//
    console.log(readMeInfo)
    writeToFile("ReadMe", readMeInfo)
    //with string
    // generateMarkdown("what's up")
    // generateMarkdown("hi")
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
