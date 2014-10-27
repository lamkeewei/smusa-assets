'use strict';

angular.module('smusaAssetsApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $scope.toggleCode = function(){
      $scope.confirmCode = '';
      $scope.makeRequest = !$scope.makeRequest;
    };

    $scope.newRequest = function(){
      $location.path('/request');
    };

    $scope.retrieveDetails = function(){
      console.log('details');
    };
  });