// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list 
// that shows what a computer programmer knows, like coding languages, tools, and software
//  frameworks. Find a way to get three specific skills from this list and show them.

// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with
//  and understand specific pieces of information.

import chalk from "chalk";
let developerSkills = {
    languages: ["Typescript","JavaScript","Python"],
    frameworks: ["React","Angular","Vue"],
    softwares: ["Visual Studio Code","Atom","Sublime Text"],
    tools: ["Git","Webpack", "Dockers"],
}

let {languages, frameworks, softwares, tools} = developerSkills;

console.log(chalk.italic.red(`Languages: ${languages[0]} , Frameworks: ${frameworks[0]} , Softwares: ${softwares[0]} , Tools: ${tools[0]}`));
console.log(chalk.italic.blue(`Languages: ${languages[1]} , Frameworks: ${frameworks[1]} , Softwares: ${softwares[1]} , Tools: ${tools[1]}`));
console.log(chalk.italic.yellow(`Languages: ${languages[2]} , Frameworks: ${frameworks[2]} , Softwares: ${softwares[2]} , Tools: ${tools[2]}`));