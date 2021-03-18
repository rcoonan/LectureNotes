let food = ["Pecan Pie","Shrimp", "Quesadilla","Cheese Cake","Hotdog"];

//regular for loop
//for (let i = 0; i <food.length; i++){
    //console.log.food[i];

food.forEach(foodItem => console.log(foodItem));

//food.forEach((foodItem, index)) => console.log((foodItem, index));

/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ["Rush","Speed","Twister"];

movies.forEach((movieItem) => console.log(movieItem));
movies.push("Rush Hour","Increadibles");
console.log(movies);

let moviesSplice = movies.splice(1,1, "frozen");
console.log(movies.splice);
console.log(movies);