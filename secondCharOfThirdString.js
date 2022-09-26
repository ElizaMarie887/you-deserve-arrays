const prompt = require('prompt-sync')({sigint: true});

/*
prompt the user for an array
log 2nd character in the 3rd item in the array
IF 3rd item is not a string log an error 
*/

let inputArray = JSON.parse(prompt("Enter an array: "))

if(inputArray[2] !== undefined && typeof inputArray[2] === 'string'){
    
    let str = inputArray[2];
    if(str.length >= 2){

        console.log("The second character of the third item in the array is " + str.substring(1,2) + ".")
    }else{
        console.log("The string doesn't have two or more characters.")
    }
}else{
    console.log("Error")
}