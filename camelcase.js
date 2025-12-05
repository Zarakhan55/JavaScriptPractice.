const Ccase =(str)=>{
    str=str.trim().split(" ");
    console.log(str);
    str =str.map((curt,index)=>{
        if(index === 0){
            return curt.toLowerCase();
        }
        else{
            return curt.charAt(0).toUpperCase() + curt.slice(1).toLowerCase();
        }
    });
        console.log(str);
        return str.join(" ");

};
console.log(Ccase("hello friend we are going to home together"));