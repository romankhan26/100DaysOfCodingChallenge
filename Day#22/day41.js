//Question 121
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
console.log("");
//Question 122
var number = 10;
while (number > 0) {
    if (number === 5) {
        break;
    }
    console.log(number);
    number--;
}
//Question 123
// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("syzygoy"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// Demonstrates iterating through a string and stopping at the first vowel.
