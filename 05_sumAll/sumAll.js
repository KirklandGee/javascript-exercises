/* Take number X and add it to number X+1. Make that number curr.
Add number curr to X+2, make that curr
Add number curr to X+3...
Return
*/
const sumAll = function(num1, num2) {
    let finalSum = 0
    if (num1 < 0 || num2 < 0 || typeof(num1) != 'number' || typeof(num2) != 'number') {
        return "ERROR"
    }
    if (num1 < num2){
    for (i=num1; i<=num2; i++) { 
        finalSum += i
        }
    } else {
    for (i=num2; i<=num1; i++) { 
        finalSum += i
        }
    }
    return finalSum
};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
