//


const palindromes = function (string) {
    const re = /[\W_]/g;
    const lowerCaseString = string.toLowerCase().replace(re, '')
    const reverseString = lowerCaseString.split('').reverse().join('')
    console.log(lowerCaseString)
    console.log(reverseString)
    return lowerCaseString === reverseString;
};

palindromes('bobs')

// Do not edit below this line
module.exports = palindromes;
