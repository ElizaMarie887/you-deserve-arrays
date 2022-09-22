const prompt = require('prompt-sync')({sigint: true});

inputArray = JSON.parse(prompt("Enter an array: "));

let firstArrayItem = inputArray [0]

console.log(`The first item in the array is ${firstArrayItem}.`);