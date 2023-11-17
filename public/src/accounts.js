
function findAccountById(accounts, id) {
  return accounts.find(user => user.id === id);
}

function sortAccountsByLastName(accounts) {
  const nameArray = accounts.map(names => {return {"name":names.name}});
    
  return nameArray.sort(function(prevName, currName){
    if (prevName.name.last < currName.name.last){
      return -1;
    } else if (prevName.name.last < currName.name.last){
      return 1;
    } else {
      return 0;
    }
  });
}

function getTotalNumberOfBorrows(account, books) {
  var total = 0;
  
  for (let i = 0; i < books.length; i++){
    const borrowsArr = books[i].borrows; 
        
    borrowsArr.forEach(borrow => {
      if (borrow.id === account.id) total += 1
      }); 
  }
  return total; 
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => {
      book.author = authors.find(author => author.id === book.authorId);
      return book.borrows.some(borrow => !borrow.returned && borrow.id === account.id);
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
