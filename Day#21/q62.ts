// Question 62: Making a Student Template: Create a blueprint for student information,
//including their name, age, and the classes they're taking, and then fill in this blueprint
// with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the
// same kind of information, making your code more organized.

interface Student {
  name: string;
  age: number;
  rollNumber: number;
  classes: string[];
}

let st1: Student = {
  name: "Armeen",
  age: 18,
  rollNumber: 123890,
  classes: ["Maths", "Chemistry", "Arabic"],
};
console.log(st1);

let st2: Student = {
  name: "Arham",
  age: 17,
  rollNumber: 123891,
  classes: ["Maths", "Physics", "English"],
};
console.log(st2);

let st3: Student = {
  name: "Saim",
  age: 17,
  rollNumber: 123892,
  classes: ["Maths", "Accounting", "English"],
};
console.log(st3);

let st4: Student = {
  name: "Faiz",
  age: 18,
  rollNumber: 123893,
  classes: ["Maths", "Chemistry", "Arabic"],
};
console.log(st4);

let st5: Student = {
  name: "Raheel",
  age: 17,
  rollNumber: 123894,
  classes: ["Maths", "Physics", "English"],
};
console.log(st5);

let st6: Student = {
  name: "Sara",
  age: 17,
  rollNumber: 123895,
  classes: ["Maths", "Accounting", "English"],
};
console.log(st6);
