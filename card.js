
const students = [
    { name: "Ali", marks: 85 },
    { name: "Sara", marks: 42 },
    { name: "Ahmed", marks: 73 },
    { name: "Zara", marks: 91 },
    { name: "Usman", marks: 35 }
];

// 1. forEach() - Display all students
students.forEach(item => {
    console.log(`${item.name}: ${item.marks}`);
});

// 2. filter() - Get students who passed
let passed = students.filter(item => item.marks >= 50);
console.log("Passed Students:", passed);

// 3. map() - Get only student names
let names = students.map(item => item.name);
console.log("Student Names:", names);

// 4. reduce() - Calculate total marks
let total = students.reduce((sum, item) => sum + item.marks, 0);
console.log("Total Marks:", total);

// 5. find() - Find Zara
let found = students.find(item => item.name === "Zara");

if (found) {
    console.log("Found Student:", found);
} else {
    console.log("Student not found");
}

// 6. Bonus: Students scoring 80 or above
let topStudents = students.filter(item => item.marks >= 80);
console.log("Students Scoring 80 or Above:", topStudents);
