const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors')

function showUserFactors(type, value) { 
    let results = {};
    let measurement;
    for (let planet in gravityFactors) { 
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }
    switch (type) { 
        case "jump":
            measurement = "cm";
            break;
        case "weight":
            measurement = "kg";
            break;
        default:
            measurement = "units";
    }
    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planet]} ${measurement}`);
    }
}

function getUserInput() { 
    console.log("what type would you like to calculate jump or weight");
    const type = prompt(">");

    console.log(`what is your earth ${type}`);
    const value = prompt(">");

    showUserFactors(type, value)
}
getUserInput();

global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;