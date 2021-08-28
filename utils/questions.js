const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project? ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe the project: ',
      },
      {
        type: 'input',
        name: 'owner',
        message: 'Who is the owner of this project? ',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please explain how to install the project: ',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of the project: ',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please explain the instructions to test the project: ',
      },
      {
        type: 'input',
        name: 'author',
        message: "Please enter all of the project's developers' names: ",
      },      
      {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project: ',
        choices: ["Apache", "GNU", "ISC", "MIT", "Mozilla"],
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your Github username? ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? ',
      },
];

module.exports = questions;