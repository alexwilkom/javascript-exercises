const { camelCase } = require("case-anything");

const convertToCelsius = function (degree) {
  // formula: °C = ((°F-32)(5)) / 9
  const celsius = ((degree - 32) * 5) / 9;

  if (!Number.isInteger(celsius)) {
    return Number(celsius.toFixed(1));
  }

  return celsius
};

const convertToFahrenheit = function (degree) {
  // formula: °F = (9/5)(°C) + 32
  const fahrenheit = ((9 / 5) * degree + 32);

  if (!Number.isInteger(fahrenheit)) {
    return Number(fahrenheit.toFixed(1));
  }

  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
