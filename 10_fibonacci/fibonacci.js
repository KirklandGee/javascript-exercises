//> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. 
// The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// Input = 5; [a, b, c, d, e] c = a+b, d = c+b, e = d+c

const fibonacci = function(num) {
    num = parseInt(num)
    if (num < 0) {
        return 'OOPS'
    }

    let fibonacciNum1 = 0
    let fibonacciNum2 = 1
    for (i=1; i<=num; i++) {
        nextNum = fibonacciNum1 + fibonacciNum2;
        fibonacciNum1 = fibonacciNum2
        fibonacciNum2 = nextNum
    }
    return fibonacciNum1
};

fibonacci(4)

// Do not edit below this line
module.exports = fibonacci;
