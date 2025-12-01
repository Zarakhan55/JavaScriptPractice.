const longword = (str) => {
  // 1 Check if string is empty or only spaces
  if (str.trim().length === 0) {
    return false;
  }

  // 2Split the string into an array of words
  let strArr = str.split(" ");

  // 3Sort words by their length (shortest → longest)
  strArr = strArr.sort((a, b) => a.length - b.length);

  // 4Print sorted array (for checking)
  console.log(strArr);

  // 5 Return the last (longest) word
  return strArr.at(-1);
};

// 6Test the function
console.log(longword("Learning JavaScript functions is extremely interesting and rewarding"));
