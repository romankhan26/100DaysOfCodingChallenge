//Question 73
function LetVariable() {
    var a = "Roman";
    console.log(a);
    a = "Ayub";
    console.log(a);
}
;
LetVariable();
//Question 74
function SwapVAlues() {
    var a = 100;
    var b = 200;
    console.log("Before swapping: a = ", a, "b = ", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After swapping: a = ".concat(a, ", b = ").concat(b));
}
;
SwapVAlues();
//Question 75
function CompoundOperators() {
    var a = 5;
    var b = 3;
    console.log(a);
    a = 5;
    a += b;
    console.log(a);
    a = 5;
    a -= b;
    console.log(a);
    a = 5;
    a *= b;
    console.log(a);
    a = 5;
    a /= b;
    console.log(a.toFixed(2));
}
CompoundOperators();
