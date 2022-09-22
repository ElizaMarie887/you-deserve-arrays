const prompt = require('prompt-sync')({sigint: true});

/*
Prompt for an array
use let items = inputArray.length to check the length of the array
use a boolean to tell us if it is at least 10
*/

let inputArray = JSON.parse(prompt("Enter an array: "));
let items = inputArray.length;
bool = true

if(items >= 10){
    console.log(bool)
}else{
    console.log("Enter a longer array!")
}