/*

    Function hi(){
        console.log("HI")
    }
    (1)
    hi()

    1 - this is where we call, or invoke our function
*/

function hi(){
    console.log("HI");
}

hi();

//hi;
//hi(); This is the correct way to invoke a function
//console.log(hi);
//console.log(hi());

//create a function that, when invoked, lists out the numbers 1-10


function list(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
    list();

//Given the array, create a function that lists out value individually.
let arr = ["This", "is","really","cool"];

function fun(){
    for(awesome of arr){
    console.log(awesome);
    }
}

fun();