const sum=(arr)=>{
    return arr.reduce((acc,cal)=> acc=acc+(cal),0);
}
console.log(sum([1,2,3]));