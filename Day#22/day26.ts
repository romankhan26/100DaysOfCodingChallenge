//question 76

function Add(n1: number, n2: number){
    return n1 + n2;
}
console.log(Add(56, 64));



//Question 77

function Greet(name : string = "Roman") {
    console.log(`Assalam Alaikum  ${name} ! How is it going?`);
    }

Greet()
 Greet("Hafsa");
 Greet("Uswa"); 
 Greet("Dua")  

 //Question 78

 function declaration(num : number){
    return num * num
 }

 const expression = function(num : number){
    return num * num
 }

 console.log(declaration(5))
 console.log(expression(5));
 