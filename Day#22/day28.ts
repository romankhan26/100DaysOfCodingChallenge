//Question 82

function stringLength(string: string) {
    return string.length;
}

console.log(stringLength("Pneumonoultramicroscopicsilicovolcanoconiosis"));

//Question 83

function CaseModify(value : string){
    console.log(value.toLowerCase());
    console.log(value.toUpperCase());
}

CaseModify("Strawberry");

//Question 84

function replacing( sentence : string) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}

console.log(replacing("JavaScript is the best programming language"));