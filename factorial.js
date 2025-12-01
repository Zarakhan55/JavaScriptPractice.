// var number=prompt("plz enter the number:");
// var fac=1;
//  if(number==0){
//     console.log(`the factorial off ${number} is 1`);
//  }else if(number <0){
//      console("negative number is not posible");
//  }else{
//    for(var x=1;x<=number;x++){
//         fac=fac*x;
//       console.log(fac);     } }


//js program to print the table of any user given number
// function table(number){
//  for(var i=1;i<=10;i++){
//   var res=i*number;
//   console.log(`${number} x ${i}=${res}`);
//  }
// }
// table(67);

//To check Armstrong Number 153=1*1*1+5*5*5+3*3*3
// var number=prompt("please enter the number");
// var temp=number;
// var noOfDigit=number.toString().length;
// alert(noOfDigit);
// var sum=0;
// while(temp>0){
// console.log(temp);
// var digit=temp%10;
// console.log(digit);
// sum+=digit**noOfDigit;
// console.log(sum);
// temp=parseInt(temp/10);
// console.log(temp);
// console.log("==================================")
// }
// if(sum == number){
  // console.log(`${number} is an armstrong number`);
// }
// else{
    // console.log(`${number} is not an armstrong number`);

// }
function fa(inputno){
  let rsl=1;
  for(let x=1;x <=inputno;x++){
    rsl=rsl*x;
    // console.log(x);
  }
  return rsl;
}


console.log(fa(3));