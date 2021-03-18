/*
-Scope is how a computer keeps track of all the variables in a program
-Scopes can also be nested, where there is an outer scope(Think global scope) that encloses an inner scope(think local scope)
    -Think about global scope as Planet Earth. Everything belongs to or is on Earth itself. We live in FOrt Wayne, which could be considered our local scope.
*/

//let x = 12;

function scope(){
    x = 33
    console.log("local:", x);
}

scope();
console.log("global:", x);

/*
-WIth the introduction of ES6 came tow more keywords to declare
variables: const and let
-const is constant that cannot be changed
-var and let seem to operate the same. But while they have a lot of the same functionality,
they behave a little differently.
    -let is scoped to the nearest ENCLOSING block, where var is scoped to the nearest FUNCTION block.
*/

var x = 12;

function varTest() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log("If Block:", x)
    }
    console.log("Function Block:", x)
} 

console.log("Global:", x)