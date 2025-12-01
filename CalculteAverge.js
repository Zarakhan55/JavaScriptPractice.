// function averge(inputArray){
//     console.log(inputArray);
//     let sum=0;
//     for(let x = 0; x< inputArray.length; x++){
//  console.log(inputArray[x]);
//  sum+=inputArray[x];
//     }
//     let rsult=sum/inputArray.length;
//     return rsult;
// }
// console.log(averge([1,2,4]));
// console.log(averge([1,2,7,14]));
// console.log(averge([9,4,0,9,99]));

 
//second method
const calNo=(arr)=>{
    let total=arr.reduce((acc,curElm)=> acc +curElm ,0)
    console.log(total);
    return total/arr.length;
}
console.log(calNo([9,0,7,3,44]));