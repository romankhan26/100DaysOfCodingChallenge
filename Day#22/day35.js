"use strict";
//Question 103
function getRBoolean() {
    return Math.random() > 0.5;
}
console.log(getRBoolean());
//Question 104
// This function generates a random hexadecimal color code
function getRandomHexColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; // Returns the random color code
}
console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
// Question 105
function Dice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(Dice());
