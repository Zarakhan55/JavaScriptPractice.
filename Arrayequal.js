//write a function arraysEqual that two arrayreturn true;

const find=(ar1,ar2)=>{
if(ar1.length !== ar2.length){
    return false;
}
return ar1.every((cal,index)=> cal === ar2 [index])
}
console.log(find([1,2,3],[1,2,3]));
console.log(find([0,82,3],[1,2,3]));