"use strict";
//question 76
function Add(n1, n2) {
    return n1 + n2;
}
console.log(Add(56, 64));
//Question 77
function Greet(name = "Roman") {
    console.log(`Assalam Alaikum  ${name} ! How is it going?`);
}
Greet();
Greet("Hafsa");
Greet("Uswa");
Greet("Dua");
//Question 78
function declaration(num) {
    return num * num;
}
const expression = function (num) {
    return num * num;
};
console.log(declaration(5));
console.log(expression(5));
