function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
         
    const possessedArr = books.filter( book => book.borrows.some(borrow => !borrow.returned));
    const returnedArr = books.filter( book => book.borrows.every(borrow => borrow.returned));
    const bookStatusArray = [possessedArr, returnedArr];
          
 return bookStatusArray;
}

function getBorrowersForBook(book, accounts) {
  const bookBorrows = book.borrows;

  const borrowers = bookBorrows.map(borrow => {
    const account = accounts.find(acc => acc.id === borrow.id);
        if (account) {
          const { id, returned, ...accountDetails } = account;
          return { id, returned: borrow.returned, ...accountDetails };
        } else {
          console.error(`Account not found for borrow ID: ${borrow.id}`);
          return null; 
        }
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

// It should return an array of ten or fewer account objects // use slice method
// each account object should include the `returned` entry    
// from the corresponding transaction object in the `borrows` array.   // add returned to accounts obj
// that represents the accounts given by the IDs in the provided book's `borrows` array.
// However, 

