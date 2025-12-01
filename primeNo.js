var number =prompt("plzzzzzzzz enter a number");
if(number==1){
    console.log(`${number} i sneither pirme nor composite`);
    
}else if(number<1){
console.log(`${number} is not a prime number`);

}else{
for(let x=2;x<number;x++){
    if(number%x==0){
        var res=`${number} is not a prime number`;
        // break;
    }
    else{
                var res=`${number} is a prime number`;
break;    }
}   
console.log(res); 
}