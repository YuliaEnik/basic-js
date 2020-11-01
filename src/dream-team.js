const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  if (!Array.isArray(members)) {
    return false;
  };
  let DreamTeam = "";
  members.forEach(item => {
    if (typeof item === 'string') {
      item = item.trim().substr(0, 1).toUpperCase();
      DreamTeam = DreamTeam + item;
    } 
  });
  return DreamTeam.split('').sort().join('');
 
}
