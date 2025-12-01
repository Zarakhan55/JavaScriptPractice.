//Generte Hash tag form given string
//first word capital,string greter than 280 
const hash =(str) =>{
    if(str.length > 280 || str.trim().length === 0){
    return false;
    }
    str =str.split(" ");
    str =str.map((curElm)=>
        curElm.replace(curElm[0],curElm[0].toUpperCase())
);
console.log(str);
str=`#${str.join("")}`;
console.log(str);

// return str;
};
 console.log(hash("my name is zara technical"));
