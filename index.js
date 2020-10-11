
// Import the required libraries to run the application
const fs = require("fs");
const inquirer = require("inquirer");

const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

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
            name: "usage"
        },
        {
            type: "checkbox",
            message: "Assign a License for the Application:",
            name: "license",
            choices: [
              "Apache_License", 
              "GNU_License", 
              "ISC_License", 
              "MIT_License"
            ]
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
        },
        {
            type: "input",
            message: "Questions about the Application (GitHub username):",
            name: "questions"
        },
        {
            type: "input",
            message: "Additional contact options: (Email address):",
            name: "email"
        }
    ])
    .then(async function (answers) {
        console.log(answers);


        const license = await readFileAsync(`./${answers.license}.txt`, 'utf8');

        const text = 
`
[TITLE]: ${answers.title}
        
[DESCRIPTION]: ${answers.description}

[VIDEO: HOW TO USE]: https://drive.google.com/file/d/1K3EGukBc3IETZES3EnXn05goL6YIuZRz/view

## TABLE OF CONTENTS
        
* [INSTALLATION](#INSTALLATION)
* [USAGE_RESTRICTION](#USAGE_RESTRICTIONS)
* [CONTRIBUTION](#CONTRIBUTION)
* [TEST_INSTRUCTIONS](#TEST_INSTRUCTIONS)
* [QUESTIONS](#QUESTIONS)
* [LICENSE](#LICENSE)

        
## INSTALLATION: 
        
${answers.instructions}



## USAGE_RESTRICTIONS: 
        
${answers.usage}



## CONTRIBUTION: 
        
${answers.contributions}



## TEST_INSTRUCTIONS: 
        
${answers.testing}



## QUESTIONS:

For questions about the application contact us at:
https://github.com/${answers.questions}
${answers.email}



## LICENSE:

${license}
`

        return writeFileAsync("README.md", text, "utf8");
    })