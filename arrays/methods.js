let food = ["Pecan Pie","Shrimp", "Quesadilla","Cheese Cake","Hotdog"];

for (foodItem of food){
    console.log(foodItem);
}

//push
console.log(food.push("Pizza"));
console.log("Push", food);

food.splice(1, 2, "Cranberry");
console.log(food);

//splice
let foodSplice = food.splice(1,2,"Cheese");
console.log(foodSplice);
console.log(food);

//pop
food.pop();
console.log(food);

//shows what is removed
let foodPop = food.pop();
console.log(foodPop);
console.log(food);

//Shift method
let foodShift = food.shift();
console.log(foodShift);
console.log("Shift:", food);

//unshift
let foodUnshift = food.unshift("Popcorn","Steak");
console.log(foodUnshift);
console.log("Unshift:", food);
