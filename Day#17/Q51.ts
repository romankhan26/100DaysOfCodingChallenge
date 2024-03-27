 /*Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the 
 area of a rectangle and refactor it into an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript 
and TypeScript, making your code cleaner and more readable.
 */
 import chalk from "chalk";
 import inquirer from "inquirer";

 
// Original function for calculating the area of a rectangle

function calculateArea(width:number , height:number): number {
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number => width * height;

// Example usage of the arrow function
console.log(chalk.bold.yellow(calculateAreaArrow(5, 7))); 
// Logs the area of the rectangle

let calculateArea1 = await inquirer.prompt([{
    message:chalk.bold.blueBright("Enter width"),
    name: "width",
    type: "number",
 },{
    message:chalk.bold.blueBright("Enter height"),
    name: "height",
    type: "number",
 }
]) 
console.log(chalk.green.bold(` Area of rectangle = ${calculateArea1.width * calculateArea1.height}`) );

