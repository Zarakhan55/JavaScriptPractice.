//Number Range genration

const range = (start, end) => {
    const result =[];
    for(let i=start; i<=end; i++){
        result.push(i);
    }
    return result;
}
console.log(range(-5,15)); // [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

