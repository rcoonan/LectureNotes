/*
-Switch statements execute a block of code depending on different cases

-The switch statement is often used together with a break or a default keywork(or both). They are both optional.
    -The break keyword breaks out of the switch block. This will stop the execution of more code or case testing inside the block.
    If break is omitted, the next code block in the swtich statement is executed.
    -The default keyword specifies some code to run if there is no case match. There can only be one default keyword in a switch.
    Although this is optional, it is recommended that you use it, as it takes care of unexpected. 
*/

let officeCharacter = "Kevin";

switch (officeCharacter){
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Kevin":
        console.log("A mistake plus keleven gets you home by seven");
        break;
    default: 
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "pudding";

switch (dessert){
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is Great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream")
        break;
    default:
        console.log(`${dessert}, is not on the menu`)
}