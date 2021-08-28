const license = require('./license.js');
const license_badge = require('./badge.js');

function generateMarkdown(response) {
    var license_description = license(response.license);
    
const markdown = `
    ## ${response.title}
    ${license_badge}

    ## Description
    ${response.description}

    ## Owner
    ${response.owner}

    ## Installation
    ${response.installation}

    ## Usage Guide
    ${response.usage}

    ## Testing
    ${response.test}

    ## Credits
    ${response.projCredit}

    ## License
    ${license_desc_text}

    ## Authors

    ## Github
    ${response.github}

    ## Email
    ${response.email}
`;
    return markdown;
}

module.exports = generateMarkdown;