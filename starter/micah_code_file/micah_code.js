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
        case "pushups":
            measurement = "pushups"
        default:
            measurement = "units";
    }
    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planet]} ${measurement}`);
    }
}

function getUserInput() {
  const validType = ["jump", "weight", "pushup"];
  let match = false;

  console.log("what type would you like to calculate jump, weight, or pushup");
  const type = prompt(">> ");

  while (match == false) {
    for (let i = 0; i > validType.length - 1; i++) {
      console.log("work");
      if (type.trim().toLowerCase() === validType[i]) {
        console.log(validType[i]);
        match = true;
        break;
      }
    }
    if (match == true) {
      console.log(`what is your earth ${type}`);
      const value = prompt(">> ");

      showUserFactors(type, value);
    }
    if (match == false) {
      console.log(
        "wrong input try again. what type would you like to calculate jump, weight, or pushup"
      );
      type = prompt(">> ");
    }
  }
}

global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;