const removeFromArray = function() {
    let args = Array.from(arguments);
    let arrayToCheck = args[0];
    args.shift();

    let spliceIndexes = [];

    for (let i=0; i<arrayToCheck.length; i++) {
        for (let j=0; j<args.length; j++) {
            if (arrayToCheck[i] === args[j]) {
                spliceIndexes.push(i);
            }
        }
    }

    spliceIndexes.sort();

    for (let k = spliceIndexes.length - 1; k>=0; k--) {
        arrayToCheck.splice(spliceIndexes[k],1);
    }
    
    return arrayToCheck;

};

// Do not edit below this line
module.exports = removeFromArray;
