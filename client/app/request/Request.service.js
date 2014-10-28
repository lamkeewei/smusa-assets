'use strict';

angular.module('smusaAssetsApp')
  .factory('Request', function ($resource) {
    return $resource('/api/requests/:id:action', {}, {
      getActive: {
        params: {
          action: 'active'
        },
        isArray: true,
        method: 'GET'
      },

      update :{
        method: 'PUT'
      }
    });
  });
