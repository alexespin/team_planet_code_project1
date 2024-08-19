
// Alex Code

const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');

function showUserFactors(type, value, system, universe) {
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
        case "pushup":
            measurement = "pushup";
            break;
        default:
            measurement = "unit";
            break;
    }

    for (let planet in results) {
        console.log(`your ${type} on ${value} is ${results[planet]}${measurement}`)
    }
}

function getUserInput() {
    const validType = ['jump', 'weight', 'pushup'];
    let isMatch = false;
    let type;
    let value;
    let system;
    let universe;

    while (true) {
        console.log("what type would you like to calculate jump, weight, or pushup");
        type = prompt(">> ");
        type = type.trim().toLowerCase();

        for (let i = 0; i < validType.length; i++) {
            if (type.trim().toLowerCase() === validType[i]) {
                isMatch = true;
            }
        }

        if (isMatch == true) {
            console.log(`how much ${type}`)
            value = prompt(">> ")
            break;
        } else {
            console.log("wrong try again.")
        }
    }

    const validType2 = ['metric', 'imperial'];
    isMatch = false;

    while (true) {
        if (type == "pushup") {
            break;
        }

        console.log("what system would you like to use (metric or imperial)");
        system = prompt(">> ");

        for (let i = 0; i < validType2.length; i++) {
            if (system.trim().toLowerCase() === validType2[i]) {
                isMatch = true;
            }
        }

        if (isMatch == true) {
            console.log(system);
            break;
        } else {
            console.log("wrong input, try again");
        }
    }

    const validType3 = ['alien', 'normal'];
    isMatch = false;
    while (true) {
        console.log("what type of planets (alien or normal)");
        universe = prompt(">> ")

        for (let i = 0; i < validType3.length; i++) {
            if (universe.trim().toLowerCase() === validType3[i]) {
                isMatch = true;
            }

            if (isMatch == true) {
                showUserFactors(type, value, system, universe);
            } else {
                console.log("try again");
            }
        }
    }



}

global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;

getUserInput()