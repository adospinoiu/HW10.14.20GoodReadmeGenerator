
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
            name: "instructions"
        },
        {
            type: "input",
            message: "Usage Restrictions for the Application:",
            name: "restrictions"
        },
        {
            type: "input",
            message: "Contribution Guidelines for Application:?",
            name: "contributions"
        },
        {
            type: "input",
            message: "Test Instructions for Application:",
            name: "testing"
        }
    ])
    .then(function (answers) {
        console.log(answers);

        const text = 
        `
        [TITLE]: ${answers.title}
        
        [DESCRIPTION]: ${answers.description}

        ## TABLE OF CONTENTS
        
        * [INSTALLATION](#INSTALLATION)
        * [RESTRICTION](#RESTRICTIONS)
        * [CONTRIBUTION](#CONTRIBUTION)
        * [TEST_INSTRUCTIONS](#TEST_INSTRUCTIONS)

        
        ## INSTALLATION: 
        
        ${answers.instructions}



        ## RESTRICTIONS: 
        
        ${answers.restrictions}



        ## CONTRIBUTION: 
        
        ${answers.contributions}



        ##TEST_INSTRUCTIONS: 
        
        ${answers.testing}
        `

        return writeFileAsync("README.md", text, "utf8");
    })