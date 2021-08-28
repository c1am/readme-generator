const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkDown = require("./utils/generateMarkdown");
const saveMarkDown = require("./utils/saveMarkdown");

async function main() {

  // ask questions
  const answers = await inquirer.prompt(questions)

  // generate markdown from answers
  const markDown = generateMarkdown(answers);

  // save file
  const fileName = await saveMarkdown(markDown);

}

// start
main();