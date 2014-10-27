'use strict';

angular.module('smusaAssetsApp')
  .factory('Request', function ($resource) {
    return $resource('/api/requests/:id', {}, {});
  });
