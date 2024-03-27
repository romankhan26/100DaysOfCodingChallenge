/*Tests for inequality and equality with strings*/
// COLORS
//True evaluation
const color1: string = "red"; 
console.log(`Is the color ${color1} equal to "red"? I predict True.`);
console.log(color1 === "red");
//False evaluation
const color2: string = "pink";
console.log(`Is the color ${color2} equal to "green"? I predict False.`);
console.log(color2 === "pink");

// SYNONYMS
//True evaluation
const feeling1: string = "joyful";
console.log(`Is "${feeling1}" equal to happy? I predict True`);
console.log(feeling1 === "joyful");
//False evaluation
const feeling2: string = "mournful";
console.log(`Is "${feeling2}" equal to happy? I predict True`);
console.log(feeling2 === "mournful");

/*Test using the lower case function*/
//STATEMENT
//True evaluation
const text1: string = "hey there, i am using vs code";
console.log(`Is statement:"${text1}" lowercase? I predict True.`);
console.log(text1.toLowerCase() === text1);
//False evaluation
const text2: string = "Hey there, I am using VS code";
console.log(`Is statement:"${text2}" lowercase? I predict False.`);
console.log(text2.toLowerCase() === text2);

//PERSON_NAME
//True evaluation
const personName1: string = "roman khan";
console.log(`Is "${personName1}" lowercase? I predict True.`);
console.log(personName1.toLowerCase() === personName1);
//False evaluation
const personName2: string = "Roman Khan";
console.log(`Is "${personName2}" lowercase? I predict False.`);
console.log(personName2.toLowerCase() === personName2);

/*Numerical tests involving equality and inequality*/
//Greater than
//True evaluation
const num1: number = 10;
console.log(`Is ${num1} greater than 8? I predict True.`);
console.log(num1 > 8);
//True evaluation
const num2: number = 10;
console.log(`Is ${num2} greater than 12? I predict False.`);
console.log(num1 > 12);

//Less than
//True evaluation
const num3: number = 2;
console.log(`Is ${num3} less than 4? I predict True.`);
console.log(num3 < 4);
//False evaluation
const num4: number = 2;
console.log(`Is ${num4} less than 1? I predict False.`);
console.log(num4 < 1);

//Greater than or Equal to
//True evaluation
const num5: number = 10;
console.log(`Is ${num5} greater than or equal to 10? I predict True`);
console.log(num5 >= 10);
//False evaluation
const num6: number = 10;
console.log(`Is ${num6} greater than or equal to 12? I predict False`);
console.log(num6 >= 12);

//Less than or Equal to
//True evaluation
const num7: number =  2;
console.log(`Is ${num7} less than or equal to 2`);
console.log(num7 <= 2);

//False evaluation
const num8: number =  2;
console.log(`Is ${num8} less than or equal to 1`);
console.log(num8 <= 1);

/*Tests using "and" and "or" operators*/
//And operators
//True evaluation
const isSunny1: boolean = true;
const isWarm1: boolean = true;
console.log(`Is it sunny and warm? I predict True.`);
console.log(isSunny1 && isWarm1);

//False evaluation
const isSunny2: boolean = true;
const isWarm2: boolean = false;
console.log(`Is it sunny and warm? I predict False.`);
console.log(isSunny2 && isWarm2);

//Or operators
//True evaluation
const isRainy1: boolean = true;
const isCold1: boolean = false;
console.log(`Is it rainy or cold? I predict True`);
console.log(isRainy1 || isCold1);

//False evaluation
const isRainy2: boolean = false;
const isCold2: boolean = false;
console.log(`Is it rainy or cold? I predict False`);
console.log(isRainy2 || isCold2);

/*Test whether an item is in an array*/
//True evaluation
const fruits: string[] = [
    "banana", "apple", "orange"
];
const targetFruit: string = "banana"
console.log(`Is "${targetFruit}" in the array? I predict True.`);
console.log(fruits.indexOf(targetFruit));

//False evaluation
const nonExistentFruit: string = "grape";
console.log(`Is "${nonExistentFruit}" in the array? I predict False.`);
console.log(fruits.indexOf(nonExistentFruit));

/*Test whether an item is not in an array*/
//True evaluation
const vegetables: string[] = ["carrot", "broccoli", "spinach"];
const targetVegetable: string = "kale";
console.log(`Is "${targetVegetable}" not in the array? I predict True.`);
console.log(!vegetables.indexOf(targetVegetable));

//False evaluation
const existingVegetable: string = "broccoli";
console.log(`Is "${existingVegetable}" not in the array? I predict False.`);
console.log(!vegetables.indexOf(existingVegetable)); 