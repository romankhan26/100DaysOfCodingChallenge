"use strict";
//Question 85 
function codePosition(str) {
    return str.indexOf("code");
}
console.log(codePosition("We should learn to code with python."));
//Question 86
function isCamera(sentence) {
    return sentence.includes("camera");
}
console.log(isCamera("The camera's viewfinder provides a real-time approximation of what will be captured by the sensor or film"));
//Question 87
function abstrctingInitial10Chars(str) {
    return str.substring(0, 10);
}
console.log(abstrctingInitial10Chars("The quick brown fox jumps over the lazy dog"));
