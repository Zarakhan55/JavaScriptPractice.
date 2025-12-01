//write a function that takes  number as input and return the sum of digit
//input number will be positive ,can not multiple digits,output shiould be all sum

const sumOfDigits=(num)=>{
    //use Array.form convert number into arry
    let arr = Array.from(String(num),Number)
    console.log(arr);
   return arr.reduce((acc,cal)=>acc+=cal,0)//use this line to add numbers
  
}
console.log(sumOfDigits(12344));