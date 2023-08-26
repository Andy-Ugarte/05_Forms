// Will hold a variety of information within them meaning, meaning we need a variety of "types" of information to store

// 7 Different Data Types

//Booleans: true or a false value. This is case sensitive
let on = true;
console.log(on);

let off = false;
console.log(off);


// Null: an empty value, this is our container, or variable, but its empty. Case sensitive 
let empty = null;
console.log(empty);


// Undefined: Declared a variable but no assigned value. Our value for a variable that has not yet been assigned. Case sensitive
let undef = undefined
console.log(undef); 

let correct;
console.log(correct);


//Number: they are numbers within JavaScript
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise); //999999999999999

let rounded = 9999999999999999; // 16 9's 
console.log(rounded); // rounds 10000000000000000

let notQuite = 0.1 + 0.2;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);// 0.3


//String: are type of data used to represent text that are wrapped in '',"".``
let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `back ticks`;

console.log(stringOne, stringTwo, stringThree);

//Numbers vs Strings
let first = 1234 + 567;// addition
let second = "1234" + '567';// concatenation

console.log(first);//
console.log(second);//

//typeof: will tell us what type a value is
console.log(typeof first);// 
console.log(typeof second);//

// Objects: used to store many values instead of just one. Console is an object
let frodo = {
//key-value pairs
// key: value
race: "hobbit",// trialing coma not necesarry, using 2 variable types. String and Number. 
rings: 1,
cloak: true
};

console.log(frodo);
console.log(typeof frodo);


// Arrays: are containers used to hold lists of values,secial type of objec
let list = ["first value", 2, false];
// 1    2   3
/*
1: name of array
2: [] which denotes an array type
3:values*/


console.log(list);
console.log(typeof list);// obeject

/*
let list = {
    0: "first value"
    1: 2,
    2: false
}
*/


//DataType Literals - fixed value in code
//String literal
let car = 'Ford';


// Numerical Literal
let decenber = 12;

//Boolean Literal
let tired = true;

//Object Literal
let soups = {
    a: 'Chicken Noodle',
    b: 'Tomato',
    c: 'Beef and Barley'
}

//Array Literal
let days = ['Monday','Tuesday','Wednesday','Thursday', 'Friday'];

// Special values
let inf = 5 / 0;
console.log(inf);

let notANumber = "string" * 317;
console.log(notANumber);
