// let evenNumber=[];
// for(let x=0;x<=10;x++){
// if((x) % 2 === 0){
//     evenNumber.push(x);
// }
// }
// console.log(evenNumber);

// //sum of arry 
// function sum(arr){
//     let sum=0;
//     for(let x=0;x<arr.length;x++){
//         sum+=arr[x];
//     }
//     return sum;
// }
// console.log(sum([2,3,2,4,6]));

// //largest num
// function large(arr){
//     return Math.max(...arr);
// }
// console.log(large([8,9,10,789,99000,8980003]));





//check if the number have same last digit

// Check if numbers have the same last digit

// let x = Number(prompt("Please enter a number:"));
// let j = Number(prompt("Please enter another number:"));
// let m = Number(prompt("Please enter a third number:"));

// let res1 = x % 10;
// let res2 = j % 10;
// let res3 = m % 10;

// if (res1 === res2 && res1 === res3) {
    // console.log(`${x}, ${j}, ${m} have the same last digit`);
// } else {
    // console.log(`${x}, ${j}, ${m} do not have the same last digit`);
// }

//Resverse a string
// function reverseString(str) {
    // if(typeof str !== 'string'){
        // throw new Error ("only string allowed");
    // }
// let reversed = " ";
// for (let i = str.length - 1; i >= 0; i--) {
    // reversed += str[i];
// }
// return reversed;
// }
// console.log(reverseString("zara"));
// console.log(reverseString("Software Engneering"));

// second method using array

function reversed(st){
    const splitedinput=st.split('');
   const Array= splitedinput.reverse();
   const result=Array.join('');
    console.log(result);

}
console.log(reversed("Software Engneering Team"));
