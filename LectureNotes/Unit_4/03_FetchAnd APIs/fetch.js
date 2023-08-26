/**
 ? APT
 Application
 Program
 Interface

 Client (front rnd) to communicate with the database
 -we can ask or request something fromo an API, and it will search a database to give us back information.

 Allow HTTP request and response lifecycle

 When receving data from an API 

? JSON
JavaScript
object
notation

!syntax
{
    "key": "value"
    "key": true,
    "key": 0
}

-all of my keys in a JSON format are going to be strings, my values do not change
-data is seperated by a comma, HOWEVER we are NOTallowed tp have a trailing comma (no comma on our last property)
-cannot hold comments OR functions
 */

let apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/jigglypuff';

/*
? Fetch
- Is an API
- is what allows us to gather information from an api, and get back some results
- function that takes in i argument, which will be the location we want to get information from
- handle the request and AND response
-returns a promise
    -we have access to out resolvers(.then, .catch)
*/



//fetch is provided to us by our !document!
fetch(apiEndpoint)
//.then(response => console.log(response))
    .then(response => response.json())
    //.json() method will translate my response object into a readble JSON object which I can then treat as any other object within my code
    .then(data=>{
        console.log(data);
        //1.create variable AND create a new element
        let pokeName;
        pokeName = document.createElement('h1');
        //2. change the text of our header element
        pokeName.innerText = data.name;
        //3. append the child onto the webpage
        document.body.appendChild(pokeName);
    
    /**
     Challange
     Display onto the webpage ONE of the pokemons's ability names as well as ONE of the images (sprites) of the pokemon
     */



    //TODO display one of the ability names
    let abilityName = document.createElement('h3');
    abilityName.innerText=data.abilities[0].ability.name;
    document.body.appendChild(abilityName);

/*
        ! Challenge
        TODO Display all areas/locations where this pokemon can be encountered
        * location_area_encounter
            * use that url to get more information
      */

let locations = data.location_area_encounters;
        fetch(locations)
        .then(response => console.log(locations));


let pokeLocation = document.createElement ('location')

//TODO display one of the sprites(images)
let pokeSprite = document.createElement('img');
pokeSprite.src = data.sprites.front_default;
document.body.appendChild(pokeSprite);

//.catch(console.error)

/**
 ! challange 

 ? create an unordered list containing every "move" a pokemon will learn
 */
let movesList = document.createElement('ul');
let moves = data.moves;
//console.log(moves);

moves.forEach((current) => {
    console.log(current.move.name);
    let li = document.createElement('li');
    li.innerText = current.move.name;
    movesList.appendChild(li);

})

document.body.appendChild(movesList);
    })
.catch(error=>console.error('UhOh!',error))
