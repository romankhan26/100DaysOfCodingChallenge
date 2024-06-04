"use strict";
//Question  91
let favFruits = ["Pineapple", "Pomegranate", "Mango"];
console.log(favFruits);
favFruits.push("Watermelon");
console.log(favFruits);
//Question 92
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); // Removes and returns the last element of the array
}
// Example: Removing the last fruit from the array
const fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.
//Question 93
const fruits1 = ["Apple", "Banana", "Cherry"]; //same as 16th line
function ReplaceBwithM(fruits1) {
    const index = fruits1.indexOf("Banana");
    if (index !== -1) {
        fruits1[index] = "Mango";
    }
}
ReplaceBwithM(fruits1);
console.log(fruits1);
