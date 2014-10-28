'use strict';

angular.module('smusaAssetsApp')
  .controller('ViewrequestCtrl', function ($scope, $window, $location, $timeout, Request, $stateParams) {
    
    $scope.flags = {};


    Request.get({ id: $stateParams.id }, function(request){
      $scope.request = request;      
    }, function(){
      $window.swal({
        title: 'Invalid Code',
        text: 'We cannot find a matching request!',
        type: 'error'
      }, function(){
        $scope.$apply(function(){
          $location.path('/');
        });
      });
    });

  });
