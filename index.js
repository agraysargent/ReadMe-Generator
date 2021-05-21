// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
const fs = require ("fs");
const util = require ("util");
const inquirer = require ("inquirer");
const generateMarkdown = require ("./assets/utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
async function promptUser(){
    return inquirer.prompt([
        {
            type:"input",
            name: "projectTitle",
            message: "What is your project titled?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "What is the installation process like?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?"
        },
        {
            // list licenses for each item
            type: "list",
            name: "license",
            message: "Select the license for this project:",
            choices: [
                "GNU_AGPLv3",
                "GNU_GPLv3",
                "GNU_LGPLv3",
                "Mozilla_Public_License_2.0",
                "MIT_License",
                "Apache_License_2.0",
                "Boost_Software_License_1.0",
                "The_Unlicense",
            ]
        },
        {
            type: "input",
            name: "contribution",
            message: "List the contributors:"
        },
        {
            type: "input",
            name: "test",
            message: "If there is a test, include here:"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email:",
        },
    ]);

}

// TODO: Create a function to initialize app
async function init() {
try {
    // promptUser().then((value) => {
    //     console.log(value);
    //     console.log(generateReadMe(value))
    // })
    const data = await promptUser()
    

    let markdown = generateMarkdown(data)
    await writeFileAsync('./folder/README.md', markdown);
    // promptUser;
    // const generateContent = generateReadMe(answers);
    // await writeFileAsync('./dist/README.md', generateContent); 
    // console.log ('ReadMe Success!');
} catch(error){
    console.log(error);
}
}

// Function call to initialize app
init();
// promptUser().then((value) => {
//     console.log(value);
//     console.log(generateReadMe(value))
// })
