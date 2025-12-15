function findMode(arr) {
    let count = {};      // step 1: store frequency
    let maxCount = 0;    // highest frequency
    let mode = null;     // value with highest frequency

    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;

        if (count[num] > maxCount) {
            maxCount = count[num];
            mode = num;
        }
    }

    return mode;
}
let numbers = [1, 2, 3, 8,8,8, 4, 2, 5];
console.log(findMode(numbers));  // Output: 2
