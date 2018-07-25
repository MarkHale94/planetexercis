const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");
planets.forEach((planets) => {
let planetDiv=document.createElement("div");
planetEl.appendChild(planetDiv);
planetDiv.innerHTML= `${planets}`;
})

console.log(planets);
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
console.log(planets);

let nuPlanets = planets.map((planet) =>{
    let capital = planet.split("");
    let upper = capital[0].toUpperCase();
    capital.splice(0,1, upper[0]);
    let newPlanet = capital.join("");
    return newPlanet});

    
console.log(nuPlanets);
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

console.log(planets.filter((planet) =>{
    return planet.includes("e");
}));

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
console.log(words.reduce((somestuff, extrastuff) => {
    return `${somestuff} ${extrastuff}`;
}));