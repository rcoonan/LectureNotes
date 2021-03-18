async function myFunction(){
        //await keyword
}

const myFunc = async() =>{
        //await keyword
}

/*
Two key difference between regualr functions and async functions:
    -Unlocks the use of the await keyword
    -Always returns a promise
*/

async function fn(){
    return Promise.reject("Hello");
}

fn()
.then(console.log)
.catch(console.log)

function myFn(){
    return Promise.resolve("Hello");
}

myFn().then(console.log);

function firstLockBox() {
    return new Promise(function(resolve, reject) {
        if(true) {
            resolve(12345);
        } else {
            reject(Error("Unexpected Error!"));
        }
    })
}

function secondLockBox(key) {
    return new Promise(function(resolve, reject) {
        if(key === 12345) {
            resolve(98765);
        } else {
            reject(Error("Wrong Key!"));
        }
    })
}

function thirdLockBox(key) {
    return new Promise(function(resolve, reject) {
        if(key === 98765) {
            resolve("Treasure!");
        } else {
            reject(Error("Wrong Key!"))
        }
    })
}

async function openBoxes(){
    let firstBox = await firstLockBox();
    let secondBox = await secondLockBox(firstBox);
    let thirdBox = await thirdLockBox(secondBox)
    console.log("first",firstBox);
    console.log("second",secondBox);
    console.log("third",thirdBox);
}

openBoxes();
console.log("Hello World!!!");


"https://rickandmortyapi.com/api/character/"

let fetchRickandMorty = async () => {
    let results = await fetch("https://rickandmortyapi.com/api/character/");
    let json = await results.json();
    console.log(json);
}

fetchRickandMorty().then(response => console.log)

function handleResults(results){
    console.log(results)
}