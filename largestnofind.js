function chk(p,q,r){
    if(p>=q && p>=r){
        return p;
    }else if(q>=p && q>=r){
        return q;
    }
else{
    return r;
}
}
var a=prompt("plz enter first number:");
var b=prompt("plz enter second number:");
var c=prompt("plz enter third number:");
// var x=Math.max(a,b,c);
var y=chk(a,b,c);
console.log(`${a},${b},${c}:Larger =${y}`);
