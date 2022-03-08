const add = function() {
  const numbers = [];
	for (let i = 0; i < arguments.length; i++) {
    numbers.push(arguments[i]);
  }
  const sum = numbers.reduce((partialSum, a) => partialSum + a, 0);
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
  const numbers = [];
	for (let i = 0; i < arguments.length; i++) {
    numbers.push(arguments[i]);
  }
};

const multiply = function() {
  const numbers = [];
	for (let i = 0; i < arguments.length; i++) {
    numbers.push(arguments[i]);
  }
};

const power = function() {
  const numbers = [];
	for (let i = 0; i < arguments.length; i++) {
    numbers.push(arguments[i]);
  }
};

const factorial = function() {
  const numbers = [];
	for (let i = 0; i < arguments.length; i++) {
    numbers.push(arguments[i]);
  }
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
