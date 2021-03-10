//A ternary bascially acts as a shortcut to writing if, if/else, and else/if statements

let num = 6;

//ternary(if)                (else)
(num > 0) ? console.log("yes") : console.log("no")

//instead of
if(num > 0){
    console.log('yes');
}else {
    console.log("no")
}

(num == 0) ? console.log("hello") : (num < 0) ? console.log("hi"):
console.log("goodbye");

if(num == 0){
    console.log("hello");
} else if (num < 0){
    console.log("Hi");
} else{
    console.log("Goodbye")
}

/*
Write a ternary that does the same thing as the age challenge
​
Age Challenge (if else):
​
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let age = 30;

(age >= 25) ? console.log("Yay! You can rent a car!") : (age >= 21) ? console.log("You can drink!") :
(age >=18) ? console.log("Yay! You can vote!"): console.log("Sorry, you're too young to do anything fun.");