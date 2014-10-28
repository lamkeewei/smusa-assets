'use strict';

angular.module('smusaAssetsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewRequest', {
        url: '/request/:id',
        templateUrl: 'app/viewRequest/viewRequest.html',
        controller: 'ViewrequestCtrl'
      });
  });