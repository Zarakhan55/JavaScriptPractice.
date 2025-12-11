//median 
const med=(arr)=>{
    if(arr.length === 0) return 0; // return 0 for empty array
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2; // average of two middle numbers
    } else {
        return arr[mid]; // middle number for odd length array
    }

};
console.log(med([2,4,5,67,8,99]));