//Every 4th year is leap year leap yeas has 366 days
function isLeapYear(year) {
    if (year % 4 === 0) {
return true;
  } else {
return false;
    }

}
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(2000)); 
//=-============================================//

function leap(){
    for(let year=2000;year<=2025;year++){
        if(isLeapYear(year)){
            console.log(year + " is a leap year");
        }else{
            console.log(year + " is not a leap year");
        }
}}
console.log(leap());
