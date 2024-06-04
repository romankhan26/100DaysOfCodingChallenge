//Question 133
var Person = {
    name: "Roman",
    age: 17,
    course: "Angular",
    grade: 90,
    rollnumber: 123009
};
console.log(Person);
var jsonString = JSON.stringify(Person);
console.log(jsonString);
//Question 134
var jsonString2 = '{"name":"Roman","age":17,"course":"Angular","grade":90,"rollnumber":123009}';
var person = JSON.parse(jsonString2);
console.log(person);
var jsonString3 = JSON.stringify(Person, null, 2);
console.log(jsonString3);
