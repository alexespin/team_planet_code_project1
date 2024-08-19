//Micah's Code
const prompt = require("prompt-sync")();
const earthGravityFactors = require("./utils/earthGravityFactors.js");
const alienGravityFactors = require("./utils/alienGravityFactors.js");

let cl = console.log;
let ce = console.error;

function showUserFactors(factortype, factorPlanets, factorUnit, factorValue) {
  cl(
    `Your ${factorType} is ${factorValue} ${factorUnit} on ${planet} in ${factorPlanets}`
  );
}



function getUserInput() {
  let factorType;
  let factorSystem;
  let factorPlanet;
  let param4;
  while (true) {
    let validWords = ["jump", "weight", "push-ups"];
    console.log("What do you want to measure? jump, weight, or push-ups? This is not case-sensitive.");
    factorType = prompt(">>").trim().toLowerCase();
    let isMatch = false;
    for (let i = 0; i < validWords.length; i++) {
      if (factorType === validWords[i]) {
        isMatch = true;
        break;
      }
    } if (isMatch) {
      break;
    } else {
      ce('ERROR! Restarting...');
    }
  }
  // while (true) {
  //   console.log("Which planet group would you like to compare? 1(earth), or 2(alien)? Only enter the number.");
  //   param2 = prompt(">>").trim().toLowerCase();
  //   if (!isNaN(param2)) {
  //     switch (param2) {
  //       case "1":
  //         factorPlanets = "earthGravityFactors";
  //         break;
  //       case "2":
  //         factorPlanets = "alienGravityFactors";
  //         break;
  //       default:
  //         factorPlanets = "earthGravityFactors";
  //     }
  //   }
  //   break;
  while (true) {
    console.log("What Measurement System? 1(metric), or 2(imperial)?");
    factorSystem = prompt(">>").trim().toLowerCase();
    if (!isNaN(factorSystem) && 4 > factorSystem > 0) {
      switch (param2) {
        case "1":
          factorSystem = "metric";
          break;
        case "2":
          factorSystem = "imperial";
          break;
        default:
          factorSystem = "metric";
      }
          break;
    } else {
    ce('ERROR! Restarting...');
  }
  } 
  let factorUnit = "repetitions";
    if (factorSystem === "metric") {
      if (factorType === "weight") {
        factorUnit = "kg"
      } else if (factorType === "jump") {
        factorUnit = "cm"
      } else if (factorType === "push-ups") { 
        factorUnit = "repititions"
      }
    } else if (factorSystem === "imperial") {
      if (factorType === "weight") {
        factorUnit = "lbs"
      } else if (factorType === "jump") {
        factorUnit = "in"
      } else if (factorType === "push-ups") { 
        factorUnit = "repititions"
      }
      }
  while (true) {
    console.log("e");
    param3 = prompt(">>").trim().toLowerCase();
    break;
    // } else {
    //   console.error('ERROR! Restarting...');
    // }
  }
  while (true) {
    console.log("What do you want for param4?");
    param4 = prompt(">>").trim().toLowerCase();
    break;
  } 
// else { 
  //   ce('ERROR! Restarting...');
  // }
    showUserFactors(factorType, factorSystem, factorUnit, param4);
  }
global.getUserInput = getUserInput;
getUserInput();
