const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw 'Error';
  };
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      // i = i + 2;
      continue;
    };
    if (i >= 1) {
      if ((arr[i - 1] === '--discard-next') || (arr[i - 2] === '--discard-next')) {
        continue;
      }
    };
    if (arr[i] === '--discard-prev') {
      if (i !== 0) {
        newArray.splice(-1, 1);
      }
      continue;
    };
    if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        newArray.push(arr[i + 1]);
      }
      //  newArray.push(arr[i + 1]);
      continue;
    };
    if (arr[i] === '--double-prev') {
      if (i !== 0) {
        if (arr[i - 2] !== '--discard-next') {
          newArray.push(arr[i - 1]);
        };
      }
      continue;
    };
    newArray.push(arr[i]);

  }
  return newArray;
}


