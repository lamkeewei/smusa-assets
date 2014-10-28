'use strict';

angular.module('smusaAssetsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('adminHome', {
        url: '/admin/home',
        templateUrl: 'app/adminHome/adminHome.html',
        controller: 'AdminhomeCtrl',
        resolve: {
          active: ['Request', function(Request){
            return Request.getActive().$promise;
          }]
        }
      });
  });