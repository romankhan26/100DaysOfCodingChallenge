"use strict";
//Question 79
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Black",
    mileage: 100000,
};
console.log(car.model + " " + car.color);
//Question 80
let car2 = {
    name: "Mercedes",
    year: 2000,
    mileage: 100000,
};
//unable to add new property...
car2.year = 2020;
console.log(car2);
//Question 81
// This function shows every detail about an object
function logObjectProperties(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
}
// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// It tells us each piece of information stored about the car.
