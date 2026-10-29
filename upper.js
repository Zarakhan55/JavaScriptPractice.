// var city = prompt("Enter your city");

// var upercity=city.toUpperCase();
// console.log(upercity);











var city = prompt("Enter your city");

var cleanestCities = [
    "cheyenne",
    "santa fe",
    "tucson",
    "great falls",
    "honolulu"
];
cleanestCities = cleanestCities.map(function(city) {
    return city.toUpperCase();
});

console.log(cleanestCities);