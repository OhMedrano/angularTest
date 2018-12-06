'use strict';

angular.module('app').
  config(function($locationProvider, $routeProvider){
    console.log('sup from config');

    $locationProvider.html5Mode({enabled:true});


    $routeProvider.
      when('/', {
        template: '<book-view></book-view>',
      }).
      otherwise({
        template: '<book-view></book-view>',
      })

  });