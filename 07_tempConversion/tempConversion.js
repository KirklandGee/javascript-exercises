const ftoc = function(temp) {
  let celsisusTemp = (temp -32) * 5/9
  return parseFloat(celsisusTemp.toFixed(1))
};

const ctof = function(temp) {
  let farenheightTemp = (temp * 9/5) + 32
  return parseFloat(farenheightTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
