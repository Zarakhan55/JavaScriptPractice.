//Check Armstrong number --153=(1^3)+(5^3)+(3^3)=153 true 370 ,407,1634,8208,54748
function Armstrong(inputno){

console.log(inputno);
let number=inputno;
const digit=[];
while(number > 0){
 let lastdigit=number % 10;
// console.log("LAst disgit is:", lastdigit);
number=Math.floor(number/10);
// console.log("New number is:",number);
digit.push(lastdigit);
}
let length=digit.length;
let sum=0;
digit.forEach(d=>{
    console.log(d,length,Math.pow(d,length));
    sum=sum+Math.pow(d,length);
})
if(sum === inputno){
    return true;
}
// console.log( "sum is:",sum);

return false;
}
// console.log(" is Armstrong number:",Armstrong(153));
console.log(" is Armstrong number:",Armstrong(92727));