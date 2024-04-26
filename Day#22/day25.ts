//Question 73

function LetVariable() {
    let a = "Roman";
    console.log(a);
    a ="Ayub"
    console.log(a);
    
};
LetVariable();


//Question 74

function SwapVAlues() {
    let a = 100;
    let b = 200;
    console.log("Before swapping: a = ",a , "b = ",b);
    let temp = a;
    a = b;
    b= temp;
    console.log(`After swapping: a = ${a}, b = ${b}`);
    
    
};

SwapVAlues();


//Question 75


function CompoundOperators(){
    let a = 5
    let b = 3
    console.log(a);
     a=5
     a+= b;
    console.log(a);
     a=5
     a -= b;
    console.log(a);
     a=5
     a*= b;
    console.log(a);
     a=5
     a/= b;
    console.log(a.toFixed(2));
}

CompoundOperators();