"use strict";
//Question 109
let time = new Date;
let CrntHour = time.getHours();
if (CrntHour < 12 && CrntHour > 6) {
    console.log(time.getHours() + ":" + time.getMinutes());
    console.log("Good Morning");
}
else {
    console.log("It's not morning.");
}
//Question 110
function assignGrade(grade) {
    if (grade >= 90) {
        return "A";
    }
    else if (grade >= 80) {
        return "B";
    }
    else if (grade >= 70) {
        return "C";
    }
    else if (grade >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(89.5));
console.log(assignGrade(90.5));
//Question 111
// Age groups can typically be categorized by specific ranges. For instance, you might 
//consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
const age1 = 45;
if (age1 < 13) {
    console.log("Child");
}
else if (age1 <= 19) {
    console.log("Teenager");
}
else if (age1 >= 20) {
    console.log("Adult");
}
else if (age1 >= 49) {
    console.log("Aged");
}
