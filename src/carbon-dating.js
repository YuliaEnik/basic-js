const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
 if (sampleActivity === undefined || typeof sampleActivity !== 'string' || sampleActivity.trim() === '' ||
      sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
   return false;
 }
  sampleActivity = Number(sampleActivity);
  if (isNaN(sampleActivity)) {
    return false;
  };
  let x = 0;
  x = (Math.log(MODERN_ACTIVITY/sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(x);
};
