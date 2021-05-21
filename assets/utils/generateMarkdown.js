// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![${license}(https://img.shields.io/badge/license-${license}-blue)]()`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
_Return to TOC - [Table of Contents](#table-of-contents)_


  # Installation
  ${data.installation}
  _Return to TOC - [Table of Contents](#table-of-contents)_

  # Usage
  ${data.usage}
  _Return to TOC - [Table of Contents](#table-of-contents)_

  # License
  ${data.license}
  _Return to TOC - [Table of Contents](#table-of-contents)_

  # Contributors
  ${data.contribution}
  _Return to TOC - [Table of Contents](#table-of-contents)_

  # Test
  ${data.test}
  _Return to TOC - [Table of Contents](#table-of-contents)_

  # Username
  ${data.username}
  _Return to TOC - [Table of Contents](#table-of-contents)_

  # Email
  ${data.email}
  _Return to TOC - [Table of Contents](#table-of-contents)_
`;
}

module.exports = generateMarkdown;
