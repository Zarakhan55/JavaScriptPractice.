//2*2*2=2^3=8
function calPower(base,exponents){
    let rslt=1;
if(base>=1){
    for(x=1;x<=exponents;x++){
rslt=rslt*base;

    }
    return rslt;

}
else{
    console.log("please enter positive value");
}
}
console.log(calPower(3,7));