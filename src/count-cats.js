const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  matrix = matrix.toString().split(',');
  
  let numberCats = 0;
  matrix.forEach(item => { 
    if(item.includes('^^') && item.length === 2) {
      numberCats += 1;
    }
    
  });
  return +numberCats;
  console.log(matrix);
  //console.log(matrix);
};
