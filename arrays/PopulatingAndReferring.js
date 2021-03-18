/*
-Arrays are containers that hold lists and items
-denoted by []

let list = ["item1","item1","item3"];
     (1)  (2)  (3)

     1. Name of array, or list
     2. the array is within sqaure brackets []
     3. Each item, regardless of datatype, is seperated by a comma
*/

let list = ["orange","banana","apple"];

console.log(list[1]);

let students = ["Tony","Marshall","Rhys", "Ray", 23, true, ["Ryan", "Iesha","Amira"]];

console.log(students[2]);

/*
CHALLENGE
************
​
    - dive into the nested array and pull the value "Amira"
    - print out "Hello Amira!"
*/

console.log("Hello", students[6][2] + "!");

let studentName = students[6][2];
console.log(`Hello ${studentName}!`);

