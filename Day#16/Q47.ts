/***Question 47:** Advanced Array Destructuring: Given an array of objects representing
 *  different laptops, each with properties `make`, `model`, and `year`, use array
 *  destructuring to assign the first and second laptops to variables. Then, log 
 *  variables.

**Explain & TIP:** Destructuring can also be used to quickly extract elements from arrays of
 objects, simplifying access to complex data structures.
*/

import { describe } from "node:test";

let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 ,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
},
    { make: "Apple", model: "MacBook Pro", year: 2020,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    } },
    { make: "HP", model: "Spectre x360", year: 2021, 
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }}
];
let [laptop1, laptop2, laptop3] = laptops;
//console.log(laptop1);
//console.log(laptop2);
laptop1.describe();
laptop2.describe();
laptop3.describe();

