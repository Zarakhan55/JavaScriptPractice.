//check perfect number  6,28,496,8128

//1+2+3=6 true;
function isperfect(inp){
    const prperDivision=[];
    for(let x=1; x < inp; x++)
{  
    if(inp % x === 0){
        prperDivision.push(x);
        console.log(`${x} is proper division`);
    }

}
// console.log(prperDivision);
let sum =0;
prperDivision.forEach(d=>{
    sum =sum + d;
});
 console.log("Sum is",sum);



if (sum === inp){
    return true;
}
return false;
}
 console.log(isperfect(6));