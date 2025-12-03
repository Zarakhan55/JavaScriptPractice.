const isPower=(num)=>{
let op=false;
for(let x=1; x<num; x++){
    if(2**x === num){
        op=true
    }
}
return op;
}
console.log(isPower(8));
console.log(isPower(6));

