function getTotalBooksCount(books) {
  return books.length;
} 

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowed = books.filter(book => book.borrows[0].returned === false);
  return borrowed.length;
}

function getMostCommonGenres(books) {
  const dictionary = {};
  const arrayOfGenreCount = [];

  books.forEach(book => {
    if (dictionary[book.genre]) {
      dictionary[book.genre] += 1
    } else {
      dictionary[book.genre] = 1
    }
  });

  for (const [key, value] of Object.entries(dictionary)) {
    arrayOfGenreCount.push(
      {
        name: key,
        count: value
      });
  }
  const final = arrayOfGenreCount.sort((genreA, genreB) => genreB.count - genreA.count);
  return final.slice(0,5);
}

function getMostPopularBooks(books) {
  const popularBooks = books.reduce((accum, book) => {
  const bookTitle = book.title;
   
    if (accum!== bookTitle) {
        const resultObj = {
                          name: bookTitle,
                          count: bookBorrowsLength(book)
                          };
        accum.push(resultObj);
    }
    return accum.sort((lowCount, highCount) => highCount.count - lowCount.count);
  }, []);

  function bookBorrowsLength(enteredBook){
    const result = enteredBook.borrows.length;
    return result;
  }

  return popularBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authArr = authors.reduce((accumAuthor, currAuthor) => {    
        
    const authorBook = books.find(book => book.authorId === currAuthor.id);
      if (authorBook){
        const authObj = {
                        name: `${currAuthor.name.first} ${currAuthor.name.last}`,
                        count: bookBorrowsLength(authorBook)
                        }
        accumAuthor.push(authObj);
        }
      return accumAuthor.sort((lowCount, highCount) => highCount.count - lowCount.count);
    }, []);

    function bookBorrowsLength(book){
      const result = book.borrows.length;
      return result;
    }
  return authArr.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
