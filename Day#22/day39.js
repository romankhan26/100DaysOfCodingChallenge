"use strict";
//Question 115
let day = function (num = 6) {
    switch (num) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        default:
        case 6:
        case 7:
            console.log("Weekend i.e. Saturday or Sunday");
            break;
    }
};
day(5);
day(4);
//Question 116
function Season(Monthnum) {
    switch (Monthnum) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
            console.log("Spring");
            break;
        case 8:
            console.log("Moonsoon");
            break;
        case 10:
        case 11:
            break;
        default:
        case 5:
        case 6:
        case 7:
            console.log("Summer");
    }
}
Season(8);
//Question 117
Season(12);
