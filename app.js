let age = parseInt(prompt("How ald are you?"));

while(isNaN(age)){
    // condition === true
    age = parseInt(prompt("Please write a number"));
}
console.log("Thank you for writing your age.");
