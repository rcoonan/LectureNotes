//console.log("spacex")

/*
    What is an API?
        -Application Programing Interface.
        -Allow appications to communicate with each other
        -It is a access point to the server, what we call an "endpoint"
                            //endpoint      
        ex. https//localhost.signin

        ASYNCHRONOUS PROGRAMMING
        - Generally, code is read and implemented line by line - this is known as synchronous programming
            - in the case of fetching data from an outside source like we do with an API, if JavaScript did not have the ability to run code asynchronously, it would have to run each line of code > wait for the response from the API > and then finish running the rest of our code.
            - in basic terms, asynchronous programming allows a program to do more than one thing at a time
        - Asynchronous programming allows our code to continue to run while we're waiting on a response from an API. Once the fetch has finished retrieving the data, it then presents us with that data, without having to wait on any other processes
        - the fetch() method is an asynchronous method, and is part of the browser window, not JavaScript
        - the fetch() method starts the process of fetching a resource from the network, and will return a promise which is fulfilled once the response is available.
            - a promise represents a value that is unknown when the promise is created, but represents the eventual fulfilled value or rejection (error)
                - a promise is always one these states:
                    - pending: initial state, neither fulfilled or rejected
                    - fulfilled: meaning the operation completed successfully
                    - rejected: meaning the operation failed
            - in the case of a fetch request, a promise will resolve into a Response object that represents the response of the request made.
*/

/*
Parts of a fetch()
 (1)          (2)
fetch ("https://localhot/dogs")
       (3)            (4)
.then( (result) => result.json())
    (5)                 (6)
.then( (json) => console.log(json))
    (7)             (8)
.catch((error)=> console.log(error))
*/

const baseURL = "https://api.spacexdata.com/v2/rockets"

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("ul")
const spaceCost = document.querySelector("table")


searchForm.addEventListener('submit', e => fetchSpace(e))

function fetchSpace(e){
    console.log(e)
    e.preventDefault();
    fetch(baseURL)
    .then((results) => results.json())
    .then((json) => displayRockets(json))
    .catch((error) => console.log(error))
}
function displayRockets(rockets){
    console.log("results:",rockets)
    //let spaceCar = rockets.forEach(rocket =>{
        //console.log(rocket)
        //let missle = document.createElement("li");
        //missle.innerText = rocket.name
        //spaceShips.appendChild(missle)

            let spaceCars = rockets.forEach(rockets => {

            let rocket = document.createElement('tr');
            let rocketName = document.createElement('td');
            let rocketCost = document.createElement('td');

            rocketName.innerText = rockets.name;
            rocketCost.innerText = rockets.cost_per_launch;

            spaceShips.appendChild(rocket);
            rocket.appendChild(rocketName);
            rocket.appendChild(rocketCost);
            })
     return spaceCars
}

function callbackFunction(){
    const data = {
        name: 'Ralf Machio', 
        age: 66, 
        occupation: 'kickboxing'
    }
    return da
    ta;
}

function showGreeting(dataFromFunction){
    return "hello " + dataFromFunction.name + ", I hear you're the greatest?!"
}

console.log(
    showGreeting(callbackFunction())
)

function callbackFunction(){
    for(let i = 0; i < 100; i++){
        console.log(i)
    }

     const data = {
        name: 'Ralf Machio', 
        age: 66, 
        occupation: 'kickboxing'
    }
    return data;
}

function showData(dataFromFunction){
    return "hello " + dataFromFunction.name
}

console.log(
    showData(callbackFunction())
)

// Boolean declaration 
var amIGood = true;

// Promise 
var iCanHaveGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);

// Promise call 
var checkTwice = function () {
    iCanHaveGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};

checkTwice();

// 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message); 
        }
    );
};

// Promise call
var checkTwice = function () {
    console.log('before Christmas'); // log before
    iCanHaveGift
        .then(playDate)

        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error)
        });
    console.log('after opening gifts'); // log after
}

// Promise call
var checkTwice = function () {
    iCanHaveGift
    .then(playDate) // chain here
    .then(function (fulfilled) {
        console.log(fulfilled);
        // output: "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new HasMattelbro Turbo-Man action figure?"
    })
    .catch(function (error) {
        // all I got was a lump of coal :(
        console.log(error)
        // output: "You've made Santa's naughty list; enjoy your coal!"
    });
};

checkTwice();