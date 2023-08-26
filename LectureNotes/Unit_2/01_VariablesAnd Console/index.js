//Variables 
//Will make a single line comment in javascript

/*
Make
a 
Multi-
Line
Comment
*/

/*
We can create variables using 3 different keywords provided to us:
1. var
2. let
3. const

var: is an older keyword used to define variables. It does run into issues with *scope* and *hoisting*, so it is not preferred however many older code bases will use it.

let: is the same as var, however it does not run into issues with *scope* or *hoisting*, which makes it a preferref keyword when defining variables.

const: short for *constant*. This functions the same as "let", however, the value of the variable cannot be changed after initialization

we **can** make a variable without a keyword, however it will run into FAR more *scope* and *hoisting* issues than out other variables. Please do not do this :)
*/

let a = 2;

        let       b        =        1;
/*       (1)      (2)      (3)      (4)
/*
1. JavaScript keyword to denote the creation of a variable
2. The name of the variable, which is how we will refer to the value it is storing.
3. Assingment Operator
4. Initial value
*/

//Variable Declaration
let x;

// Variable Initialization 
let y= 10;


let first = "John ";
let last = "Doe";

let full = first + last;
console.log(full);


let j;
console.log("Declaration:",j); //Declaration undefinied - I have not given it any value yet

j = 10;
console.log(j); // Initialization: 10 - I have now given it a value that is being displayed

j = 33
console.log(j); // Re-Initialization: 33- variables made using car or let can be re-initialized, or assigned new values


let today = "Great"
const javascript = "Wonderful!"
console.log(today, javascript); //

today= "Humid!";
console.log(today, javascript);

// javascript = "Super!" //Error: Cannot reassign a constant variable after initialization 
console.log(today,javascript); //cannot change value of const


//Console Object notes
console.log("This message is a string")

let myName = "Jerome";
console.log("log",myName);


console.warn("This is a warning");

let warning = "Uh Oh"
console.log("warn",warning);


console.error("This is an error");

let err="This one looks real bad"
console.error("error:",err)