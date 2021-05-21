// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let link; 
 switch (license) {
    case "MIT_License":link ='https://choosealicense.com/licenses/mit/' 
    break;
    case "GNU_AGPLv3":link ='https://choosealicense.com/licenses/agpl-3.0/' 
    break;
    case "GNU_GPLv3": link ='https://choosealicense.com/licenses/gpl-3.0/' 
    break;
    case "GNU_LGPLv3": link ='https://choosealicense.com/licenses/lgpl-3.0/' 
    break;
    case "Mozilla_Public_License_2.0": link ='https://choosealicense.com/licenses/mpl-2.0/' 
    break;
    case "Apache_License_2.0": link ='https://choosealicense.com/licenses/apache-2.0/' 
    break;
    case "Boost_Software_License_1.0": link ='https://choosealicense.com/licenses/bsl-1.0/' 
    break;
    case "The_Unlicense":link = 'https://choosealicense.com/licenses/unlicense/' 
    break;
  
    default: link =  'none'
    break; 
  }
 
  return link; 
}

function renderLicenseBadge(license) {
  if(license === 'The_Unlicense' ) return ''; 
  return `[![${license}](https://img.shields.io/badge/license-${license}-blue)](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # ${data.projectTitle}

  # Table of Contents
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributors](#Contributors)
  -[Test](#Test)
  -[Username](#Username)
  -[Email](#Email)

  # Description

  ${data.description}

  # Installation

  ${data.installation}

  # Usage

  ${data.usage}

  # License

  ${data.license}

  # Contributors

  ${data.contribution}

  # Test

  ${data.test}
 
  # Username

  ${data.username}

  # Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
