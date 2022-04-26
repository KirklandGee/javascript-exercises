const removeFromArray = function(array, ...removals) {
    let newArray = array.filter(element => !removals.includes(element));
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
