// let user = +prompt("Enter any number");

// let timer = setInterval(function () {

//     user--;

//     console.log(user);

//     if (user === 0) {
//         clearInterval(timer);
//         console.log("Time's Up!");
//     }

// }, 1000);


let totalSeconds=100;
let timer = setInterval(function () {

totalSeconds--;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

console.log(`${minutes}:${seconds}`);
}, 1000);