//Longest word in code 
//trim use for remove last space 
const findlongNo = (str) => {
    if(str.trim().length === 0){
        return false;
    }
    starArr=str.split(" ");
    //sort use for alsways capital letter first then small
    //
    // starArr=starArr.sort((a,b)=>a.length-b.length);
    // console.log(starArr);
    // return  starArr.at(-1);
    // return starArr[0];
//second method
    return starArr.reduce(
        (accum,xurt)=>(xurt.length>accum.length  ? xurt:accum),
    );
};
console.log(
    findlongNo("Watch thapa technical javscript course on youtube zaraNasirKhanNoor")
);