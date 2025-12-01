// Celsius convert to Fahrenheit
// formula: (C * 9/5) + 32

function converttoFahrenheit(temp){
    let result = (temp * 9/5) + 32;
    result = Math.round(result);
    return result;
}

console.log(converttoFahrenheit(27));
