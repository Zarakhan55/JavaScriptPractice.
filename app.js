// let day = Number(prompt("enter number 1---7"));

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         let no=prompt("enter day");
//         console.log(no);
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Try again.................................");
// }

let price = 2500;
let quantity = 3;
let member = true;
let coupon = "SAVE10";
let city = "Karachi";
let subtotal=price*quantity;
console.log("total :"+subtotal);
let discount = 0;

if (member) {
  discount = subtotal * 0.10;
}

console.log(discount);

let couponDiscount = 0;

switch (coupon) {
  case "SAVE10":
    couponDiscount = subtotal * 0.10;
    break;

  case "SAVE20":
    couponDiscount = subtotal * 0.20;
    break;

  case "WELCOME":
    couponDiscount = 500;
    break;

  default:
    couponDiscount = 0;
}



// let role = "student";

// switch (role) {
//   case "admin":
//     console.log("admin-portal");
//     break;
//   case "student":
//     console.log("student-portal");
//     break;
//   case "trader":
//    console.log("trader-portal");
//     break;

//   default:
//     console.log("Invalid role");
// }
