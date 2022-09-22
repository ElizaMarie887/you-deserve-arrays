const prompt = require('prompt-sync')({sigint: true});

let inputArray = JSON.parse(prompt("Enter an array: "));
let items = inputArray.length;

if(items >= 4){
    console.log(inputArray[3]);
}else {
    let lastIndex = items -1;
    console.log(inputArray[lastIndex]);
}

