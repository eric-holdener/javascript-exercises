const palindromes = function (string) {
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    let splitString = string.split("");

    let cleanLetters = splitString.filter(letter => 
        punctuation.indexOf(letter) === -1);

    string = cleanLetters.join("");
    string = string.replace(/\s/g, '');

    let reverseArray = cleanLetters.reverse();
    let reversedString = reverseArray.join("");
    reversedString = reversedString.replace(/\s/g, '');

    if (string.toLowerCase() === reversedString.toLowerCase()){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
