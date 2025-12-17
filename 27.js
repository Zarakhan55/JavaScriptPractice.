//Write function that take repeatString that takes two prameter
const strree=(str,num)=>{
    return str.repeat(num);
}
console.log(strree("abc",5)); //abcabcabcabcabc
 
//second method 

function repeatString(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}
console.log(repeatString("xyz", 3)); //xyzxyzxyz