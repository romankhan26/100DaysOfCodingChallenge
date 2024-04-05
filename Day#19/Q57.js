// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the 
//average, giving us an idea of how well someone did overall.
var grades = [90, 76, 79, 98, 79, 87, 94, 59, 88, 77];
var averageGrades = grades.reduce(function (total, grades) { return total + grades; }, 0) / grades.length;
console.log(averageGrades);
if (averageGrades > 80) {
    console.log("GRADE : A1");
} //particularly here we have grade > 80, therefore we are not giving more if/else statements...
