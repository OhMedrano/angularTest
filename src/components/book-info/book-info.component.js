'use strict'; 


angular.module('bookInfo').
        component('bookInfo', {
          bindings: {
            "selectedBook" : "<"
          }, 
          controller: function($window) {
            const vm = this;

            vm.$onInit = function() {
              vm.activeSelectBook = $window.angular.copy(vm.selectedBook);
            }
            vm.$onChange = function(change) {
              if(change.selectedBook) {
                vm.activeSelectBook = $window.angular.copy(vm.selectedBook);
              }
            }

          },
          templateUrl: 'src/templates/book-info.html',
        })