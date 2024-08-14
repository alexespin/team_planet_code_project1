const prompt = require("prompt-sync")();
const gravityFactors = require("./gravityFactors.js");

function calculateJump(earthJumpHeight) {
  let jumpHeights = {};
  for (let planet in gravityFactors) {
    jumpHeights[planet] = parseFloat(
      (earthJumpHeight * gravityFactors[planet]).toFixed(2)
    );
  }
  console.log(jumpHeights);
}
function getUserJump() {
  console.log("Enter Jump Height");
  const input = prompt(">>");
  console.log("Your jump height is:", input);

  calculateJump(input);
}
global.calculateJump = calculateJump;
global.getUserJump = getUserJump;
