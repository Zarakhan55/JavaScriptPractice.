function fizbuz(inupt){
for(let x=1;x<=inupt;x++){
 if(x %  3=== 0 && x % 5 ===0){
          console.log(" Fizz buzz");

 } else if(x % 3 === 0){
        console.log("fizz");
    }else if(x % 5 ===0){
                console.log("buzz");

    }
    else{
    console.log(x);}
}
console.log(inupt);
}
console.log(fizbuz(36));