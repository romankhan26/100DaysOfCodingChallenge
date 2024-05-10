//Question 88

function nearestInt(x:number):number {
 return Math.round(x)
}

console.log(nearestInt(1.72));
console.log(nearestInt(1.56));
console.log(nearestInt(1.22));
console.log(nearestInt(1.48));
console.log(nearestInt(1.50));

//Question 89

function ConvertintoInt(numberW: string, numberD: string)
{
    console.log(parseInt(numberW) + parseFloat(numberD)  );
    console.log(parseInt(numberW) - parseFloat(numberD)  );
    

}
ConvertintoInt("123" , "3.70");

//Question 90

function isValueNAN(value : any) : boolean{
    return isNaN(value)
}

console.log(isValueNAN("Romi"));
console.log(isValueNAN(123456));
console.log("My name is Roman");

