const prompt = require('prompt-sync')({sigint: true});

let inputArray = JSON.parse(prompt("Enter an array: "));

let arrayLength = inputArray.length;
let lastIndex = arrayLength -1;
console.log(inputArray[lastIndex]);