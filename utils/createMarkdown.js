const fs = require('fs');
const new_readme_name = "README_NEW.md";

const createMarkdown = (string) => {
    fs.writeFile(new_readme_name, string, function(err, result) {
        if(err) {
            console.log('error', err);
        } else {
            console.log("Your new readme file has been created!");
        }}
    )
};

module.exports = createMarkdown;