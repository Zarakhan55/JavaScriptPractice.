// Question 1 — Electricity Bill

function calculateBill(units) {
    let bill = 0;

    if (units <= 100) {
        bill = units * 10;
    } 
    else if (units <= 200) {
        bill = (100 * 10) + ((units - 100) * 15);
    } 
    else {
        bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
    }

    return bill;
}

console.log(calculateBill(200)); 


// Question 2 — Grade Calculator

function getGrade(marks) {
    if (marks >= 85) {
        return "A";
    }
    else if (marks >= 75) {
        return "B";
    }
    else if (marks >= 65) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

console.log(getGrade(82)); // B


// Question 3 — Password Checker

function checkPassword(password) {
    if (password.length >= 8) {
        return "Strong Password";
    } 
    else {
        return "Weak Password";
    }
}

console.log(checkPassword("password123")); 
console.log(checkPassword("hello"));      


// Question 4 — Discount Calculator

function calculateDiscount(price, discountPercent) {
    const discountAmount = price * (discountPercent / 100);
    const finalPrice = price - discountAmount;

    return finalPrice;
}

console.log(calculateDiscount(1000, 70));
