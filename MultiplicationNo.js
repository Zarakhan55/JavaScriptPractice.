//write tables
function printMultiplication(tableof,tabletill){
    console.log(" Multiplication of table:"+tableof);
    for(let x=1;x<=tabletill;x++){
        console.log(`${tableof} * ${x} = ${x*tableof}`);
    }
}

printMultiplication(4,10);