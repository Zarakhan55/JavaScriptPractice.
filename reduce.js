// let prices = [500, 1000, 1500];

// let total = prices.reduce(function(sum, price) {
//     return sum + price;
// }, 0);

// console.log(total); // 3000

// let earnings = [2000, 3500, 1500, 4000, 2500];
// let total=earnings.reduce((sum, earning) => sum + earning, 0);
// console.log(total); // 13500


// let expenses = [
//     { name: "Food", amount: 500 },
//     { name: "Travel", amount: 300 },
//     { name: "Internet", amount: 1000 },
//     { name: "Books", amount: 700 }
// ];
// let total=expenses.reduce((sum,expense)=>sum+expemse.amount,0);
// console.log(total); // 2500

















let projects = [
    { name: "Landing Page", earning: 5000, status: "completed" },
    { name: "Portfolio", earning: 3000, status: "completed" },
    { name: "E-commerce", earning: 12000, status: "pending" },
    { name: "Blog Website", earning: 4000, status: "completed" },
    { name: "Restaurant Website", earning: 8000, status: "pending" },
    { name: "Business Website", earning: 6000, status: "completed" }
];

let totalEarnings = projects.reduce((sum, project) => sum + project.earning, 0);
console.log(totalEarnings); // 38000

let pendingProjects = projects.filter(project => project.status === "pending");
let totalPendingEarnings = pendingProjects.reduce((sum, project) => sum + project.earning, 0);
console.log(totalPendingEarnings); // 20000

let TotalincompletedEarnings = projects.filter(project => project.status === "completed").reduce((sum, project) => sum + project.earning, 0);
console.log(TotalincompletedEarnings); // 18000
