//Question 67

function SumOfStringAndNumber(number1: number, numberString: string): number{
    return number1 + Number(numberString);
}
console.log(SumOfStringAndNumber(4 , "34"));


//Question 68
function ProductOfDecimal(number1: number, number2: number): number {
     return Math.round((number1 * number2)*100)/100;
}
console.log(ProductOfDecimal(0.5 , 0.75 ));


//Question 69

function RemainderNQuotient(dividend: number , divisor: number):{quotient: number, remainder: number}{
    let quotient = Math.floor(dividend / divisor)
    let remainder = dividend % divisor;
    return { quotient , remainder}
}

console.log(RemainderNQuotient(19, 9));
