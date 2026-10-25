let button = document.getElementById("myButton");
let button2 = document.getElementById("myButton2");
let button3 = document.getElementById("username");
let result = document.getElementById("result");
button.addEventListener("click", function () {
    button.innerHTML = "Button Clicked!";
    button.style.backgroundColor = "green";
});

button2.addEventListener("mouseover", function () {
    let chk = "Mouse Over!";
    chk = chk.toLocaleUpperCase();

    button2.innerHTML = chk;
    button2.style.backgroundColor = "blue";
});


button3.addEventListener("input", function () {
    result.textContent = "Hello " + button3.value;
})

let message = document.getElementById("message");

message.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        alert("You pressed Escape!");
    }
});