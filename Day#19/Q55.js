"use strict";
//Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make 
//a new list where each number is twice its original value.
//Explain & TIP: We can use a special tool to go through each number in our list and make a 
//new list with each number doubled.
let numbers = [1, 2, 3, 4, 5];
let i = 0;
for (i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
    console.log(numbers[i]);
}
//                      Answer: Please try to do it yourself first!
// Starts with a list of numbers
let numbers3 = [1, 2, 3, 4, 5];
// Doubles each number
let doubledNumbers = numbers3.map(number => number * 2);
// Shows the new list of doubled numbers
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// This line takes each number, doubles it, and puts it in a new list.
