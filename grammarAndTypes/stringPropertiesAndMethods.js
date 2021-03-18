/*
-Properties are qualities associated with a data type
-strings only have one singular property for us to access, that being the length property
*/

let myName = "Riley";
console.log(myName.length);

/*
-Methods are tools that can help us manipulate data
-.property vs .method()
-Methods are functions associated with data types
*/

let myNameIs = "Riley";
console.log(myNameIs.toUpperCase());

let home = "My home is Fort Wayne";
console.log(home.includes("Fort Wayne"));

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts';
let splitString = sent.split(" ");
console.log(splitString);
