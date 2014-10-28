'use strict';

angular.module('smusaAssetsApp')
  .controller('AdminhomeCtrl', function ($scope, $window, active, Request) {
    $scope.search = {};

    $scope.active = active;

    $scope.startDates = [];
    active.forEach(function(request){
      $scope.startDates.push(request.startDate);
    });

    console.log($scope.startDates);

    $scope.update = function(request, status){
      var copy = angular.copy(request);

      console.log(copy.items);
      
      copy.items.forEach(function(item){
        item.itemId = item.itemId._id;
      });

      copy.status = status;

      Request.update({id: copy._id}, copy, function(){
        $window.swal({
          title: 'Updated',
          text: 'Request has been updated',
          timer: 1000,
          type: 'success'
        });

        request.status = status;
      });
    };
  });
