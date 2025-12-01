function vowel(inputStr) {
    console.log(inputStr);
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let vCount = 0;
    let cCount = 0;

    for (let x = 0; x < inputStr.length; x++) {
        let ch = inputStr[x].toLowerCase();
        if (vowels.includes(ch)) {
            vCount++;
        } else if (consonants.includes(ch)) {
            cCount++;
        }
    }

    return { vCount, cCount };
}

console.log(vowel("Hello world"));
