const add = function(a, b) {
  return a +b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(array) {
  let output = 0
  for (let item in array) {
    output += parseInt(array[item]);
 } 
 return output
};

sum([7, 11])

const multiply = function(array) {
  let sum = 1
  for (item in array) {
    sum *= array[item];
 } 
 return sum
};

const power = function(a, b) {
  let multiplier = a
  for (i=1; i<b; i++) {
    multiplier *= a
  }
  return multiplier
};

const factorial = function(num) {
  if (num == 0) {
    return 1
  }
  for (i=num; i>2; i--) {
    num *= (i-1)
    console.log(num)
  }
  return num
};

factorial(10)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
