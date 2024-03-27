"use strict";
//Question 49: Function with Rest Parameters: Write a function that takes a rest parameter
// representing multiple hobbies. It should log each hobby with a statement saying you enjoy
// that hobby.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments 
//as an array, providing a way to handle multiple inputs gracefully.
const chalk_1 = __importDefault(require("chalk"));
// Defines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies) {
    // Loops through each hobby in the array
    hobbies.forEach(hobby => {
        // Logs a statement for each hobby
        console.log(chalk_1.default.bgCyan.bold(`I enjoy ${hobby} in my leisure time!`));
    });
}
// Calls the function with three hobbies
logHobbies("reading novels", "cooking", "cycling", "coding", "watching dramas");
