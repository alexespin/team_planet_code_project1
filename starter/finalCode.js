const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');

function showUserFactors(type, value) {
    let results = {};

    let measurement;

    for (let planets in gravityFactors) {
        results[planets] = parseFloat((gravityFactors[planets] * value).toFixed(2));
        measurement = type;

    }

    switch (type) {
        case "jump":
            measurement = "cm";
            break;
        case "weight":
            measurement = "kg";
            break;
        default:
            measurement = "unit"
            break;
    }

    for (let planet in results) {
        console.log(`your ${type} on ${planet} is ${results[planet]}${measurement}`)
    }
}

function getUserInput() {
    console.log("what type would you like to calculate jump or weight");
    const type = prompt(">");

    console.log(`what is your earth ${type}`)
    const value = prompt(">")

    showUserFactors(type, value)
}

function alienPlanet() {
    console.log("pick one of the alien planets")
    for (alienGravityFactors) { 

    }

}

global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;