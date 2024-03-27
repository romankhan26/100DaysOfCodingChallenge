"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the
area of a rectangle and refactor it into an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript
and TypeScript, making your code cleaner and more readable.
*/
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
// Original function for calculating the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
// Refactored into an arrow function
let calculateAreaArrow = (width, height) => width * height;
// Example usage of the arrow function
console.log(chalk_1.default.bold.yellow(calculateAreaArrow(5, 7)));
// Logs the area of the rectangle
let calculateArea1 = await inquirer_1.default.prompt([{
        message: chalk_1.default.bold.blueBright("Enter width"),
        name: "width",
        type: "number",
    }, {
        message: chalk_1.default.bold.blueBright("Enter height"),
        name: "height",
        type: "number",
    }
]);
console.log(chalk_1.default.green.bold(` Area of rectangle = ${calculateArea1.width * calculateArea1.height}`));
