const students=["Zara", "Mahnaz", "Ayan", "Daisy","Qadir"];
students.push("Ali");
console.log(students);
students.pop();
console.log(students);

const languages=["JavaScript","Python","C++","Java"];
languages.unshift("C#");
console.log(languages);
languages.shift();
console.log(languages);


const skills = ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Node"];

let frontendSkills = skills.slice(1, 4);

console.log(frontendSkills);

console.log(skills);

skills.splice(3, 1, "Tailwind");

console.log(skills);