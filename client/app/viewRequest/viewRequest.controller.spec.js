'use strict';

describe('Controller: ViewrequestCtrl', function () {

  // load the controller's module
  beforeEach(module('smusaAssetsApp'));

  var ViewrequestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewrequestCtrl = $controller('ViewrequestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
