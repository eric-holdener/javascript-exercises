const ftoc = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit-32) * (5/9);
  let stringRoundedTempCelsius = tempCelsius.toFixed(1);
  let roundedTempCelsius = parseFloat(stringRoundedTempCelsius);
  return roundedTempCelsius;
};

const ctof = function(tempCelsius) {
  let tempFahrenheit = tempCelsius * (9/5) + 32;
  let stringRoundedTempFahrenheit = tempFahrenheit.toFixed(1);
  let roundedTempFahrenheit = parseFloat(stringRoundedTempFahrenheit);
  return roundedTempFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
