/*
Syntax

//declaration     //name       //parameters & fat arrow section
    let      =     fatArrow    (parameter1, parameter2, etc) => console.log("fat arrow");
    //calling upon the function
        fatArrow();
*/

/*
Concise Body Arrow Function...
    -return by default
    -run when they are called upon(fatArrow())
    -May only be one line long
*/

let cereal = () => console.log("Riley ate cereal for lunch!")
cereal();

/*
Block Body Arrow Functions
    -do NOT return by default, you must include a return statement
    -run when they are called upon
    -may consist of more than one line, given they are wrapped in {}
*/

let riley = (firstName, lastName) => {
    return (`My name is ${firstName} ${lastName}`);
}
console.log(riley("riley","coonan"));

/*
Concise vs Block Body Functions
Concise =>
    -returns implicitly (no return statement needed)
    -Must be containted into one line
*/

let apples = x => console.log(`There are ${x} apples`)
apples(10);

/*
Block =>
    - does not contain an explicit return statement, we have to include it (return xyz)
    - Can be more than one line as long as contained by curly braces
*/

