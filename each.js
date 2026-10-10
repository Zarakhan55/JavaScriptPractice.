let languages = ["JavaScript", "Python", "Java", "C++"];

languages.forEach(function (language) {
    console.log(language);
});

let cart = [
  {name: "Shoes", price: 2500},
  {name: "Bag", price: 1800},
  {name: "Watch", price: 3000}
];
cart.forEach(function (item) {
    console.log(`$ name: ${item.name}, Price: ${item.price}`);
});

let expenses = [
    { title: "Food", amount: 500 },
    { title: "Transport", amount: 200 },
    { title: "Books", amount: 1200 }
];

let totalAmount = 0;

expenses.forEach(function(expense) {
    console.log(`${expense.title}: Rs. ${expense.amount}`);

    totalAmount += expense.amount;
});

console.log(`Total Expenses: Rs. ${totalAmount}`);