const getTheTitles = function(books) {
    bookTitles = []
    for (let book in books) {
        bookTitles.push(books[book].title)
    }
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
