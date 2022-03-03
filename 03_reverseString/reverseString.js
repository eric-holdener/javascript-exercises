const reverseString = function(string) {
    var splitString = string.split("");

    var reverseString = splitString.reverse();

    var reversedWord = reverseString.join("");

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
