/*
Constructor Functions
*********************

    -Constructor functions can be thought of as a reusable skeleton object
    -We can add to the constructor functions the same way we add to objects - dot notation
    -It is good practice to capitalize your constructor functions

Option 1
*/

let artist1={
    name: "Queen",
    albums : 15,
    allMembersAlive: false
}

let artist2 = {
    name: "FLeetwood Mac",
    Albums: 18,
    allMembersAlive: false,
}

let artist3 = {
    name: "Stevie Wonder",
    albums: 11,
    allMembersAlive: true,
}


// (1)     (2)          (3)
function Artist(name, albums, allMembersAlive){
//  (4)   (5)    (6)
    this.name = name;
    this.albums = albums;
    this.allMembersAlive = allMembersAlive;
}

/*
    1- the function keyword
    2- CAPITALIZED
    3 - THe parameters : These will be the calues of the object once this function is in use.
    4 - The "this" keyword. "This" gives us the ability to refer back to whatever called, or whatever activities it. In this cae, "this"
    will refer to our artist being created.
    5 - The key of our new object that is being created
    6 - Is referring back to the parameter that is being passed to the function
    7 - The new keyword calling our artist function, creating a new "artist" with values passed in as parameters.
*/
//           (7)  (8)
let artist = new Artist("Eminem", 20, true)
console.log(artist)

function Car(make, model, miles, hasBeenCrashed){
    this.make = make;
    this.model = model;
    this.miles = miles;
    this.hasBeenCrashed = hasBeenCrashed;
}
console.log(car)

