'use strict';

angular.module('smusaAssetsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('request', {
        url: '/request',
        templateUrl: 'app/request/request.html',
        controller: 'RequestCtrl',
        resolve: {
          items: ['Item', function(Item) {
            return Item.query().$promise;
          }]
        }
      });
  });