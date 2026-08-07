const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * (9/5);
  return Number(Math.round(celsius + 'e' + 1) + 'e-' + 1);
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * (9/5) + 32);
  return Number(Math.round(fahrenheit + 'e' + 1) + 'e-' + 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
