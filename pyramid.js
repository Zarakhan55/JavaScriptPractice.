// print a number pyramid
function pyramid(inputNo){
    for(let x =1;x <= inputNo;x++){
        // console.log(inputNo-x);
        let linecontent="";
        for(let space=1;space<=inputNo-x;space++){
            linecontent = linecontent+" ";
        }
    
    for(let count=1; count <= x; count++){
            linecontent = linecontent+count;

    }
        for (let reverse = x-1; reverse >=1;reverse--){
                        linecontent = linecontent+reverse;

        }
            console.log(linecontent);

}}
pyramid(5);