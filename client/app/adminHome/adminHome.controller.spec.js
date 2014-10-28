'use strict';

describe('Controller: AdminhomeCtrl', function () {

  // load the controller's module
  beforeEach(module('smusaAssetsApp'));

  var AdminhomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminhomeCtrl = $controller('AdminhomeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
