'use strict';

angular.module('smusaAssetsApp')
  .controller('ViewrequestCtrl', function ($scope, request) {
    $scope.request = request;
    console.log(request);
  });
