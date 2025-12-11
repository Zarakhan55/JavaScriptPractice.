//the mean is the everage of a set of numbers
//input array may + - integers ,array maybe empty ,if the empty so return 0
function cal(arr){
    if(arr.length === 0) return 0; // return 0 for empty array
    let sum=arr.reduce((acc, val) => acc + val, 0); // calculate sum of array elements
    return sum / arr.length; // return mean
}
console.log(cal([1,2,3,4,5,6]));