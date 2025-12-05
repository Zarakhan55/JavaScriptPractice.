const snake = (str) => {
    str = str.trim().split(" ");
    console.log(str);

    str = str.map((crt, index) => {
        if (index === 0) {
            return crt.toLowerCase();  // first word all lowercase
        } else {
            return crt.charAt(0).toLowerCase() + crt.slice(1).toLowerCase();
        }
    });

    console.log(str);
    return str.join("_"); // snake_case uses underscore
};

console.log(snake("HELLO GUX HI HI HI "));
