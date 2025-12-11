function Reverse(inputString){
    if(typeof inputString !== 'string'){
        throw new Error("onlu string allows");
        
    }
    let result= "";
    for(let x=inputString.length-1; x>=0;x--){
        result=result+inputString[x];

    }
    return result;
}
console.log(Reverse("asyesha"));
// console.log(Reverse(46757));








function rev2(inputst){
    const splited=inputst.split('');
    const reversestring=splited.reverse();
    const rsl=reversestring.join('');
    console.log(inputst);
    console.log(splited);
    console.log(reversestring);
return rsl;
}
console.log(rev2("Happy"));