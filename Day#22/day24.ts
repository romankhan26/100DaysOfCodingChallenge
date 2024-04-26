//Question 70 
 function PrintNumWithLet() {
    for (let i = 0; i < 5;i++ ){
 console.log(i + 1);
 
    }
 }

 PrintNumWithLet();


 //Question 71

 let age = 17
 console.log(age);
 age++;
 console.log(age);

 const myName = "Roman"
 try {
    myName = "Hafsa"
 } catch (error) {
    console.log("Error: We cannot reasign const variable");
 }

 //Question 72

 // Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}

try {
    console.log(blockLet); // This will fail
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}

try {
    console.log(blockConst); // This will also fail
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
 
 