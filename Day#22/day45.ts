//Question 133
const Person= { 
    name : "Roman",
    age: 17,
    course: "Angular",
    grade: 90,
    rollnumber: 123009
}
console.log(Person);

let jsonString =JSON.stringify(Person);

console.log(jsonString);


//Question 134
let jsonString2= '{"name":"Roman","age":17,"course":"Angular","grade":90,"rollnumber":123009}'

let person = JSON.parse(jsonString2);
console.log(person);


let jsonString3 =JSON.stringify(Person, null, 2);

console.log(jsonString3);
