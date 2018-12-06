'use strict';

class BookGet {
  constructor($filter, $http) {
    console.log('firing off from BookGet');
  
    this.books = [
      { "id": "1", "name": "Harry Potter  Book  1", "details": { "title": "Harry Potter and the Goblet of Fire", "ISBN": "1000" } },
      { "id": "2", "name": "Harry  Potter  Book  2", "details": { "title": "Harry Potter and the Chamber of Secrets", "ISBN": "1001" } },
      { "id": "3", "name": "Harry Potter  Book  3", "details": { "title": "Harry Potter and the Sorcerer's Stone", "ISBN": "1003" } },
      { "id": "4", "name": "Dune Book 1", "details": { "title": "Dune", "ISBN": "1004" } },
      { "id": "5", "name": "Discworld Book 1", "details": { "title": "Discworld", "ISBN": "1005" } },
            { "id": "6", "name": "Tao Book 1", "details": { "title": "The death of Tao", "ISBN": "1006" } },
                  { "id": "7", "name": "Game of Thrones Book 1", "details": { "title": "A song of Ice and Fire", "ISBN": "1007" } },          
    ];

    this.$filter = $filter;
    this.$http = $http;
  }

  getBooks() {
    return this.books;
  }


  getBook(idType,idValue) {
   let returnedBook = [];

   let parsedValue = idValue.toString().toLowerCase();
    angular.forEach(this.books, (book, i) => {
        switch(idType) {
          case 'title': 
              let splitWords = book.details[idType].toLowerCase().split(' ');
              let valueSplit = parsedValue.split(' ');
              let matchVal = 0;
              valueSplit.forEach((word, i) => {
                if(word == splitWords[i]) {
                  matchVal += 1;
                }
              })
    
              if(matchVal >= valueSplit.length) {
                returnedBook.push(book);
              }

              break;
          case 'ISBN': 
              console.log('this is a ISBN search');
              if(book.details.ISBN === parsedValue) {
                returnedBook.push(book);
              }
              break;
        }
    })

    return returnedBook
    
  }
}



angular.module('bookGet').
        service('bookSvc', BookGet);