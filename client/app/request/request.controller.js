'use strict';

angular.module('smusaAssetsApp')
  .controller('RequestCtrl', function ($scope, items, $window, Request, $location) {
    $scope.items = items;
    $scope.submitted = false;
    $scope.startDates = [];
    $scope.endDates = [];

    for(var i = 0; i < 14; i++) {
      var date = $window.moment().add(i, 'days').toDate();
      $scope.startDates.push(date);
    }

    for(var i = 1; i < 15; i++) {
      var date = $window.moment().add(i, 'days').toDate();
      $scope.endDates.push(date);
    }

    $scope.request = {
      items: [],
      startDate: $scope.startDates[0],
      endDate: $scope.endDates[0]
    };

    angular.forEach($scope.items, function(item){
      item.qtyRequested = 0;
    });

    $scope.submitRequest = function(form){
      $scope.submitted = true;

      if (form.$invalid) {
        $window.swal({
          title: 'Oops...', 
          text: 'Fill out all the required fields!', 
          type: 'error',
          timer: 2000
        });

        return;
      }

      var sum = 0;

      angular.forEach($scope.items, function(item){
        var qty = item.qtyRequested;
        sum += qty;

        if (qty > 0){
          $scope.request.items.push({
            itemId: item._id,
            qtyRequested: item.qtyRequested
          });
        }
      });

      if (sum < 1) {
        $window.swal({
          title: 'Oops...', 
          text: 'Please choose at least one item!', 
          type: 'error',
          timer: 2000
        });

        return;
      }

      Request.save($scope.request, function(reply){
        $location.path('/request/' + reply._id);
      });
    };
  });
