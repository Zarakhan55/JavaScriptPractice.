// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);

// let name="Zara Nasir khan";
// let fN=name.slice(4,15);
// console.log(fN);

// let Name="Zara";
// let Father="Nasir Khan";
// result=Name.concat(" ",Father);
// console.log(result);

// let name = prompt("Enter your name");
// let Upr = name.charAt(0).toUpperCase();
// let result=name.substring(2);
// alert(Upr.concat(result));
// let s="Helloo";
// console.log(s.replace('o','z'));


// const str = "apple apple apple";
// const result = str.replaceAll("apple", "orange");

// console.log(result);

const str = "Apple APPLE apple ApPlE";
const result = str.replace(/apple/gi, "orange");

console.log(result);


