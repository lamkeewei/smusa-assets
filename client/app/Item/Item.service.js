'use strict';

angular.module('smusaAssetsApp')
  .factory('Item', function ($resource) {
    return $resource('/api/items', {}, {});
  });
