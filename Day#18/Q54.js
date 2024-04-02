//Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change
// the name of each section based on what you need at that moment, like adjusting labels
// based on user choices.
//Explain & TIP: This is like having labels you can rewrite anytime, which is great for when
// you need to adjust your list based on new information.
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {}; // Explicit type definition
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
export {};
