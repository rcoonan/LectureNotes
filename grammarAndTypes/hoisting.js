/*
-first pass: stores our variable/function declarations, but does not assign values. Anything that needs hoisted is hoisted here.
-second pass: assigns the values to our variables and executes any hoisted source code.
*/
​
​
​
b();
​
function b() {
    let myName = "Donovan";
    console.log(myName);
    console.log("I have been hoisted!")
}