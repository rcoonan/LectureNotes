let weather = 55;

if (weather < 70){
    console.log("Wear a Jacket!");
} else {
    console.log("No Jacket necassary!");
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    
Silver:
    If It is your name, console log 'Hello, my name is <name>'
    
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

//Bronze
let myName = "Riley";

if (myName == "Riley"){
    console.log(myName);
} else {
    console.log("Hello, what is your name?");
}

//Silver
let myNameOne = "Riley";

if (myNameOne == "Riley"){
    console.log(`Hello, my name is ${myNameOne}`);
}else {
    console.log("Hello, what is your name?");
}

//Gold

let myNameTwo = "Riley";

if (myNameTwo == "Riley"){
    console.log(`Hello, my name is ${myNameTwo}`);
}else{
    console.log(`Hello, is your name ${myNameTwo}?`);
}

/*
Use this string: let name = 'zAchARy';
​
Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

//Bronze
let zName = "zAchARy";
if(zName.charAt(0) === zName.charAt(0).toUpperCase()){
    console.log(zName) 
}else{
    console.log("Hey, this isn't written correctly")
}
//Silver

if(zName[0]=== zName[0].toUpperCase()){
    console.log(zName[0]);
}else{
    console.log(zName.substr(1).toLowerCase())
}
//Gold

let results = "";

if(zName[0]=== zName[0].toUpperCase()){
    results = zName[0] + zName.substr(1).toLowerCase();
}else{
    results = zName[0].toUpperCase() + zName.substr(1).toLowerCase();
}
console.log(results);

//console.log(results += zName.substr(1).toLowerCase());

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 25;

if(age <= 17){
    console.log("Sorry, you're too young to do anything.");
}else if (age >= 18 && age < 21){
    console.log("You can vote!");
}else if(age >= 21 && age < 25){
    console.log("You can drink!");
}else{
    console.log("You can rent a car!");
}

if(age >= 25){
    console.log("You can rent a car!");
} else if (age < 25 && age >= 21){
    console.log("You can drink!");
} else if (age < 21 && age >= 18){
    console.log("You can vote!");
} else{
    console.log("Sorry, you are too young to do anything.");
}


