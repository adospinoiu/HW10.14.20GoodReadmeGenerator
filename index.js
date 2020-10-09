
// Import the required libraries to run the application
const fs = require("fs");
const inquirer = require("inquirer");

const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Ask the user to enter information in the respective sections
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the Title of the Application?",
            name: "title"
        },
        {
            type: "input",
            message: "Brief Description of the Application?",
            name: "description"
        },
        {
            type: "input",
            message: "Installation Instructions for the Application:",
            name: "bio"
        },
        // {
        //     type: "input",
        //     message: "What is your LinkedIn URL?",
        //     name: "linkedIn"
        // },
        // {
        //     type: "input",
        //     message: "What is your GitHub URL?",
        //     name: "gitHub"
        // }
    ])
    .then(function (answers) {
        console.log(answers);
        return writeFileAsync("README.txt", '\n' + answers, "utf8");
    })