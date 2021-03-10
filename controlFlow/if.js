/*
-A falsy value is a value that is considered false when encountered in a boolean context.
        -false
        -0
        -"", '', ``
        -null
        -undefined
        -NaN (Not a Number)

-This means that when Javascript is expecting a boolean and is given one of the values above, it will always evaluate to "falsy"
*/

let isOn = true;

if (isOn == true){
    console.log("the light is on");
}

isOn = false;

if(isOn){
    console.log("The light is off");
}

let weather = 5;

if(weather < 70){
    console.log("Wear a jacket!");
}