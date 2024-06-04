"use strict";
//Question 112
const countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
//Question 113
const countries1 = new Map();
countries1.set("USA", "Washington, D.C."); // Adds USA to the Map
countries1.set("France", "Paris"); // Adds France to the Map
countries1.set("Japan", "Tokyo"); // Adds Japan to the Map
countries1.set("Canada", "Ottawa"); // Adds Canada to the Map
function capitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`Capital of Canada : ${countries.get("Canada")}`);
    }
    else {
        console.log("Map does not contain Canada.");
    }
}
capitalOfCanada(countries1);
//Question 114
const students = new Map();
students.set(1123, "Roman");
students.set(1124, "Hafsa");
students.set(1125, "Uswa");
students.set(1126, "Dua");
students.set(1127, "Ayub");
students.forEach((Stname, id) => {
    console.log(`Student name : ${Stname}   Student ID number : ${id}`);
});
