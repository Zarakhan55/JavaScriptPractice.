


function countchar(inp){
    inp=inp.toLowerCase();
  const splitno=  inp.split("");
 const rslt= splitno.reduce((acc,char)=>{
    console.log(char);
    if(!acc[char]){
acc[char]=0;
    }
    acc[char]=acc[char]+1;
    return acc;
  },{});

  console.log("Accumaltor result is:",rslt);
}
console.log("Zara Khan1",countchar("Zara Khan2"));
