function number(a, b) {
    let total = a + b;
    return total;
}

let result = number(1000, 500);

console.log("Total:", result);

if (result >= 1000) {
    let discount = result * 10 / 100;
    let finalPrice = result - discount;

    console.log("10% Discount:", discount);
    console.log("Final Price:", finalPrice);
} else {
    console.log("No discount");
}
