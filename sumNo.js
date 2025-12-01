// //sum of digits
// function sumOfDigits(num) {
//     if(num<1){
//         throw new Error("input must me positive");
//     }
// const inputNo=num.toString();
// const splited=inputNo.split('');
// console.log(splited);
// let sum=0;
// splited.forEach(no => {
//     console.log(parseInt(no));
//     sum=sum+parseInt(no);
    
// });
// return sum;



//     }
//     console.log(sumOfDigits(799));








function sum3(num){
    let np=num;
    let sum=0;
    while(np>0){
        let last=np%10;
        np=Math.floor(np/10);
        sum=sum+last;

    }
    return sum;
    // console.log(num % 10);
    // console.log("divide by 10",Math.floor(num /10));

}
console.log(sum3(18));