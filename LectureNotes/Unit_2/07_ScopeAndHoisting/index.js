// Scope

// global Scope: the entire file
// local Scope: the current block of code

let x = 12;

function scope() {
  let x = 33;
  console.log(x); //33
  // start by looking for a local variable with that given name, then expand into the previous code block and search again.
}

scope();
console.log(x); // 12

let y = 12;

function scopeY() {
  y = 33; //redefinig y
  console.log(y); //
}

scopeY();
console.log(y); //33


/*
Variable Keywords:
-var: scope to the nearest function block
-let: scope to the nearest enclosing block
-const: cannot be reassigned
*/

// VAP
var z = 12;

function varTest(){
var z = 33;

if(1 == 1){
    var z = 45;
    console.log(`VAR - Wiithin If: ${z}`);
}

console.log( `VAR - Outside If: ${z}`);
}

varTest ();
console.log(`VAR - Outside Function: ${z}`);


// LET
let a = 12;

function letTest(){
let a = 33;

if(true){
    let a = 45;
    console.log(`Let - Within If: ${a}`)//45
}

console.log(`LET - Within If: ${a}`)//33
}

letTest();
console.log(`LET - Outside Function: ${a}`);//12


// CONST
//const follows the same block rules as let

















/*
Hoisting

When we write and run JavaScript, our file gets read 2 times
1. Look for variable Names, Functions, and store those in memory
2. Variables are assigned values and we execute our code.

Certain Values like let or const don NOT get hoisted
*/

c



onsole.log(myName);
let myName = "Jerome";

/*
When I run both lines of this code, I am given a referencc eerror. cannot access myName before initialization.
-Because myName is a let "let" variable , my code knows it exists, however I have not yet declared or assigned it a value on line 104, so i get an error

When I simply run the console log(). I am given a reference error. myName is not defined 
-This is because I do not have ANY variable named myName when I only run the console log
*/
example();

//Function declarations DO get hoisted, meaning I can call them higher within my file than I have defined them. 
function example(){
    console.log('YES! I do get hoisted!');
}



// coolFunction()
// Function Expression do NOT get hoisted, and follow the rules of whichever keyword was used
let coolFunction = () => {
    console.log('This is a cool function');
}

coolFunction();