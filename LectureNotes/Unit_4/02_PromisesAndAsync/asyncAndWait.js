/**
 Async and Await
- Introduced and ES8 in 2017
    *ES* is a version of JS, AKA ECMAScript
- can make any function asynchronous simply be demoting it. 
-Keywords
    -async
    denotes something as asynchronous
    -await: 
    tells our code for something to finsih before moving on. 
-Can help us reduce the need for callback functions
-Cannot be used in loops
-ALWAYS retunr  a promise
 */

//? funcntion delcaration
//async function asyncFunctionDelcaration(){
    //some code
//}

//? function expression
//let asyncFunctionDelcaration = async function() {
    //some code
//}

//? arrow function
let asyncArrowFunction = async() => {
    //some code
}


async function getName () {
    return "Gandalf";
}

//console.log(getName());
getName().then(name=>console.log(name));



/**
 ! Await
 - Tell JS that a promise is being retunred and to wait on that result
 - await can only be used within an async function
 */

 async function listenToMusic() {
    let name = getName();
    return `${name} is listening to smooth jazz`;
 }

// listenToMusic.then(data => console.log(data));

 
 
 
 
 //! Fetch: Async vs Resolver Methods
 const url = "https://meowfacts.herokuapp.com/";

 function getCatFact_Methods(){
    fetch(url)
    .then(response => response.json()) //res
    .then(fact => console.log(fact.data[0]))
 }

 getCatFact_Methods();

async function getCatFact_Await(){
    let res = await fetch(url); //* wait for our fetch to resolve before assinging "res" a value
    let results = await res.json(); //* wait for out res to be formated as a JSON
    console.log(results.data[0]);
 }

 getCatFact_Await();



/**
 *! Challange
 TODO Using SWAPI (star wars API) [https:swapi.dev/], display on the webpage info from one characture 
    *name
    * height
    * birth yearw
 */

const SWAPIurl = "https://swapi.dev/api/people/3/";

async function starWarsCharacter(){
    let response = await fetch(SWAPIurl);
    let character = await response.json();
    console.log(character);
}

starWarsCharacter();