//write function that take in  integer as input and remove dupliacte elements

const rmv = (arr) => {
    let newarr = [...new Set(arr)];
    // console.log(newarr);
    return newarr;
}
console.log(rmv([1,2,3,4,5,6,8,8]));