const prompt = require('prompt-sync')({sigint: true});

/*
prompt user for an array
typeof to figure out if first item is a number
use a boolean to print out if this is true or not
*/

let inputArray = JSON.parse(prompt("Enter an array: "));
let bool = false;

if (!isNaN(inputArray[0])){
    bool = true
}

console.log(bool)