//Question 56: Keep Only Strings: Given a mix of different types of items, 
//make a new list that has only the words.

//Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list 
//that includes only those words.


// A mixed bag of items
let mixedArray = [1, "apple", 2, "banana", true, "carrot", true, "cheese", false , 56,];

// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");

// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.


let numbersArray = mixedArray.filter(item => typeof item === "number");

// Shows the list of just numbers
console.log(numbersArray); // 
// This line checks each item: if it's a number, it goes into the new list.


let booleanArray = mixedArray.filter(item => typeof item === "boolean");

// Shows the list of just boolean
console.log(booleanArray); // 
// This line checks each item: if it's a boolean, it goes into the new list.
