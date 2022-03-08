const fibonacci = function(number) {
    let fibonacciNum = 1;
    let currentNum = 1;
    let pastNum = 0;

    if (number < 0) {
        return 'OOPS';
    } else if (typeof number === 'string') {
        number = parseInt(number);
        for (let i = 0; i <= number - 2; i++) {
            fibonacciNum = currentNum + pastNum;
            pastNum = currentNum;
            currentNum = fibonacciNum;
        }
    } else {
        for (let i = 0; i <= number -2; i++) {
            fibonacciNum = currentNum + pastNum;
            pastNum = currentNum;
            currentNum = fibonacciNum;
        }
    }
    return fibonacciNum;
};

// Do not edit below this line
module.exports = fibonacci;
