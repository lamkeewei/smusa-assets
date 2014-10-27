'use strict';

angular.module('smusaAssetsApp')
  .controller('ViewrequestCtrl', function ($scope, request, $window, $location, $timeout) {
    $scope.request = request;
    $scope.flags = {};

    if (!request.name) {
      $window.swal({
        title: 'Invalid Code',
        text: 'We cannot find a matching request!',
        type: 'error'
      }, function(){
        $scope.$apply(function(){
          $location.path('/');
        });
      });
    }
  });
