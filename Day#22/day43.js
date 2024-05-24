//Question 127
//Traditional Function 
var Addition = function (a, b) {
    return a + b;
};
var Addition1 = function (a, b) { return a + b; };
console.log(Addition(10, 10));
console.log(Addition1(10, 10));
//Question 128
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(1, 2, 3, 4));
// Arrow function that calculates the product of all its parameters
var multiplyParameters2 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters2(2, 3, 4)); // Outputs: 24
// This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.
// This line uses the reduce method on the numbers array to calculate the product of all the numbers passed to the function. Here's how it works:
// numbers.reduce: The reduce method is a higher-order function used to transform an array into a single value by applying a function to each element of the array.
// (total, number) => total * number: This is the callback function that gets called on each element of the array during the reduction process. It takes two parameters: total and number.
// total is the accumulated result of the reduction so far.
// number is the current element being processed.
// The function multiplies total by number and returns the result. This is how it calculates the product of all the numbers.
// 1: This is the initial value for total. It serves as the starting point for the reduction process. If the array is empty, this value will be returned as the result without calling the callback function. In this case, it ensures that if there are no numbers to multiply, the function will return 1.
// So, to summarize, the reduce method iterates over each element of the numbers array, multiplying them together using the callback function (total, number) => total * number, and starting with an initial total value of 1. This effectively calculates the product of all the numbers passed to the function.
//Question 129
// Demonstrating 'this' in traditional vs. arrow functions
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log("Arrow function:"); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.
