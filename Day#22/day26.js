//question 76
function Add(n1, n2) {
    return n1 + n2;
}
console.log(Add(56, 64));
//Question 77
function Greet(name) {
    if (name === void 0) { name = "Roman"; }
    console.log("Assalam Alaikum  ".concat(name, " ! How is it going?"));
}
Greet();
Greet("Hafsa");
Greet("Uswa");
Greet("Dua");
//Question 78
function declaration(num) {
    return num * num;
}
var expression = function (num) {
    return num * num;
};
console.log(declaration(5));
console.log(expression(5));
