const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let tower = new Object()
  tower.turns = Math.pow(2, disksNumber) - 1;
  tower.seconds = Math.floor(tower.turns * (3600 / turnsSpeed) )
  return tower;
};
