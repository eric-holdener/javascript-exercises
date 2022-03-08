const add = function() {
  let numbers = [];

  for (let i = 0; i < arguments.length; i++) {
  numbers.push(arguments[i]);
  }
  const sum = numbers.reduce((previousValue, currentValue) => 
    previousValue + currentValue, 0);
  
  return sum;
};

const subtract = function() {
  const numbers = [];
	for (let i = 0; i < arguments.length; i++) {
    numbers.push(arguments[i]);
  }

  const subtract = numbers.reduce((a, b) => a - b);

  return subtract;
};

const sum = function() {
  const numbers = arguments[0];
  const sum = numbers.reduce((previousValue, currentValue) => 
    previousValue + currentValue, 0);

  return sum;
};

const multiply = function() {
  const numbers = arguments[0];

  const multiply = numbers.reduce((previousValue, currentValue) => 
  previousValue * currentValue, 1);

  return multiply;
};

const power = function(a, b) {
  let power = a**b;
  return power;
};

const factorial = function(a) {
  let factorial = 1;
  for (let i = 1; i <= a; i++) {
    factorial = factorial * i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
