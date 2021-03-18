//Functions expressions are functions stored within variables
//Function expressions DO NOT get hoisted

/*
       (1)
    let hey = function hi(){
        console.log("HI");
    }

    1 - the variable hey is now represntative of the function hi()
*/

let hey = function(){
    console.log("HI");
}

hey()