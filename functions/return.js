/*

    let hi = () => {
        (1)
        Return "Hi"
    }
         (2)      (3)
    let newName = hi()

    console.log(newName)

    1- the keyword that brings our data out of our function
    2- We need a new variable to hold the value of the return
    3 -When called, the function becomes the value of the return
*/

let myName = fName => {
    return "Riley";
}

let newName = myName();
//console.log(newName);

function capitalizeName(name){
    let capName = "";
    for (let u in name){
        if(u == 0){
            capName += name[1].toUpperCase();
        } else{
            capName += name[1].toLowerCase();
        }
    }
    //console.log(capName)
    return capName
}

let finishedName = capitalizeName("rIlEy");
console.log(finishedName)

/*
    Make a tip calculator using a block body fat arrow function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

let check = 75;

let tipAmount = priceBeforeTip =>{
    let tip = priceBeforeTip * .15
    return tip;
}

let tip = tipAmount(check);
console.log(`Your meal cost ${check}, you should tip ${tip}`);

function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2, 3, 4));

  function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());

  function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());

 function hi() { 
    console.log('Hello!')
 }

