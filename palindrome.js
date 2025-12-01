// function palindrom(inputString){
//     for(let x=0;x<=inputString.length/2;x++){
//         // console.log("x is:",x);
//         // console.log(inputString.length-1-x);
//     if(inputString[x] !== inputString[inputString.length-1-x]){
//         return false;
//     }
//         // console.log(inputString);
          
//     }
//     return true;
// }
// console.log( palindrom("madam"));
// console.log( palindrom("hamna"));
// console.log( palindrom("Amna"));

//second method to solve 

const ispal=(str)=>{
    str=str.toLowerCase().replace(/\W/g,"");
    //replace(/\W/g,"") use for remove all non-word char from the tring[^a=zA-Z0-9_]
    let r_str=str.split("").reverse().join("");
console.log(r_str);
return str === r_str ? true:false;

}
console.log(ispal("A man,a plan,a canal,panama"));
console.log(ispal("racecar"));