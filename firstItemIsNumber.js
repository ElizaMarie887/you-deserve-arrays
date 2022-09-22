const prompt = require('prompt-sync')({sigint: true});

inputArray = JSON.parse(prompt("Enter an array: "));

let firstArrayItem = inputArray [0]
let bool = true
let num = typeof firstArrayItem

if(num = Number){
    console.log(`It's ${bool}, your first item is a number!`)
}
