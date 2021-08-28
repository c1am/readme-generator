const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");
const createMarkdown = require("./utils/createMarkdown");

async function main() {

  // ask questions
  const answers = await inquirer.prompt(questions)

  // generate markdown from answers
  const markdown = generateMarkdown(answers);

  // save file
  const new_readme_name = await createMarkdown(markdown);
}

// start
main();