const fruits = ["apple", "banana", "mango"];

if (fruits.includes("banana")) {
    console.log("Yes");
} else {
    console.log("No");
}
console.log(fruits.join("_"));

const fruits1 = ["apple", "banana"];
const fruits2 = ["mango", "orange"];

const result = fruits1.concat(fruits2);
console.log(Array.isArray(fruits1));

console.log(fruits2);
console.log(result);

