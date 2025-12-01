//maximum number of array
const findmax = (arr) =>{
    // return Math.max(10,20,30); when jsut number we use this method
    console.log(...arr);
    return Math.max(...arr);//.. use arry to number

}
console.log(findmax([1,4,7,9,10,55]));
console.log(findmax([1,4,7,-9,-10,-55]));
