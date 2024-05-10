//Question 106

// This function checks if a year is a leap year
function isLeapYear(year: number): boolean {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  console.log(isLeapYear(2020)); // Outputs: true
  console.log(isLeapYear(1900)); // Outputs: false
  // By using comparison operators, we can easily determine if a year is a leap year or not.



//Question 107

function isDivisibleBy2n3(number1: number): boolean {
    console.log("Is This number is divisble by 2 and 3?");
    
    return (number1 % 2 === 0) && (number1 % 3 === 0)
}

console.log(isDivisibleBy2n3(36));


//Question 108


function StringComparison(str1:string, str2:string) {
    console.log('Are "HElLo WorlD" & "Hello world" identical regardless of their cases?');
    
    return str1.toLowerCase() === str2.toLowerCase()
}

console.log(StringComparison("HElLo WorlD", "Hello world"));
