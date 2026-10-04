// const cart = ["Mango", "apple", "peach", "pear"];

// cart.pop();       
// cart.push("grape"); 
// cart.shift();     
// cart.unshift("banana"); 
// console.log(cart);

// const result = cart.slice(1);

// console.log(result);


// let arr = [10, 20, 30, 40];

// arr.splice(1, 2);

// console.log(arr); 
// arr.splice(2, 0, 30);

// console.log(arr); 
// arr.splice(1, 1, 99);

// console.log(arr); 
// const cart = ["Mango", "apple", "kiwi", "orange", "Grapes","pears","watermelon"];

// let arr2 = cart.splice(1, "nori", "trtrt","ffff");

// console.log("Updated cart:", cart);
// console.log("Removed items:", arr2);
// console.log(cart.reverse())














// const cart = ["Mango", "apple", "kiwi", "orange", "Grapes"];

// cart.reverse();

// console.log(cart);


const numbers = [10, 5, 25, 2, 1];

numbers.sort((a, b) => a - b);

console.log(numbers);

const fruits=["mango","apple","kiwi","orange","Grapes"];
fruits.sort((a,b)=>a-b);
console.log(fruits);

// Do all of these:

// Add "Banana" to the end.

// Remove "Mango".

// Replace "Kiwi" with "Pineapple".

// Reverse the array.

// Sort the final array alphabetically.

// Print the final array
const fruit = ["apple", "mango", "kiwi", "watermelon", "Cherry", "pear"];

fruit.push("banana");
console.log("Add banana:", fruit);

fruit.splice(1, 1);
console.log("Remove Mango:", fruit);

fruit.splice(1, 1, "pineapple");
console.log("Replace Kiwi:", fruit);

fruit.reverse();
console.log("Reverse:", fruit);

fruit.sort();
console.log("Sort:", fruit);

console.log("Final result:", fruit);
