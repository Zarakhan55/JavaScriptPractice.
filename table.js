const createTable = (no) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${no} x ${i} = ${no * i}`);
  }
};

let number = prompt("Enter a number:");

createTable(number);
