const find = (arr) => {
    arr=arr.sort((a,b)=> {
        if(b>a) return -1 ;
    });
    return arr[0];
};
console.log(find([4,8,9,15,89]));


//second method

const fd=(ar)=>{
    if(ar.length === 0) return "empty erry";
    return Math.min(...ar);
};
console.log(fd([9,8,1,7,6,66]));
console.log(fd([]));