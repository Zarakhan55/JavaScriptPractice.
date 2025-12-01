//sort array of numbers in an asscending order

const sortMethod =(arr)=>{
    //  return arr.sort((a,b)=>b-a);
     return arr.sort((a,b)=>a-b);

}
console.log(sortMethod([3,2,4,16,9]));