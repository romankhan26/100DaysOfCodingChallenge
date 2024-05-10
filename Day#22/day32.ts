//Question 94

const words: string[] = ["Ayub", "Sara", "Hafsa", "Roman", "Uswa", "Dua"];
console.log(words);
const Wlength = words.map(word => word.length);
console.log(Wlength);

//Question 95

function greaterThan10(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}
const numbers = [1,3,5,7,11,13,17,19]//prime numbers
console.log(greaterThan10(numbers));

//Question 96

// This function calculates the sum of all numbers in an array
function calculateSum(numbers1: number[]): number {
    return numbers1.reduce((accumulator, current) => accumulator + current, 0);
}

// Example: Calculating the sum of an array of numbers
const numbers1: number[] = [1, 2, 12, 4, 5];
console.log(calculateSum(numbers1)); // Outputs: 15
// It adds up all the numbers in the array, resulting in a single sum value.