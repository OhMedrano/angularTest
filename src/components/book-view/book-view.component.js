'use strict'; 


angular.module('bookView').
        component('bookView', {
          controller: function(bookSvc, $window) {
            const vm = this;

            vm.state = {
              activeBook:0,
            }


            console.log($window);


            vm.bookss = bookSvc.getBooks()

            vm.activeBook = vm.bookss[vm.state.activeBook];

            vm.idTypes = ['title','ISBN'];
            vm.searchQuery = {
              idType: vm.idTypes[0],

            }


            vm.resetBooks = () => {
              vm.bookss = bookSvc.getBooks();
            }


            vm.clickButton = () => {
              vm.activeBook = vm.bookss[vm.state.activeBook];

            }

            vm.performSearch = function(){

              vm.bookss = bookSvc.getBook(vm.searchQuery.idType, vm.searchQuery.query)
              vm.clickButton();

            }



          },
          templateUrl: 'src/templates/book-view.html',
        })