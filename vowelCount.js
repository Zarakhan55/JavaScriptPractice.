//write function for vowel
const countVowel =(str)=>{
    let vowel=['a','e','i','o','u'];
    let arr=str.split('');
    console.log(arr);
    let count =0;
    for (let char of arr){
        if(vowel.includes(char.toLowerCase())){
            count ++;

        }
    }
    return count;
}

console.log(countVowel("Hellooooo world"));