// console.log("Game Over");

// var timeoutId = setTimeout(function() {
//     console.log("Restarting game...");
// }, 1000);


// clearTimeout(timeoutId);                                                                                                                                                                                                                                                             
// var intervalId = setInterval(() => {
//   document.write("Hello");
// }, 1000);

// clearInterval(intervalId);



let count=0;
let intervalId=setInterval(() => {
    console.log("Hello");
    count++;
    console.log(count);
    if(count===10){
        clearInterval(intervalId);
    
    }

},1000);