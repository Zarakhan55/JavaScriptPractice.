const students = {
  student1: { name: "Ali", age: 20, marks: 85 },
  student2: { name: "Ahmed", age: 21, marks: 78 },
  student3: { name: "Sara", age: 19, marks: 92 },
  student4: { name: "Ayesha", age: 20, marks: 88 },
  student5: { name: "Hamza", age: 22, marks: 75 },
  student6: { name: "Usman", age: 21, marks: 81 },
  student7: { name: "Fatima", age: 19, marks: 95 },
  student8: { name: "Hassan", age: 20, marks: 79 },
  student9: { name: "Zainab", age: 21, marks: 89 },
  student10: { name: "Bilal", age: 22, marks: 73 }
};

for (let key in students) {
  console.log(
    students[key].name,
    students[key].age,
    students[key].marks
  );
}
