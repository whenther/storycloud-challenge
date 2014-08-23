'use strict';

/**
 * @ngdoc service
 * @name storycloudChallengeApp.Resource
 * @description
 * # Resource
 * Factory in the storycloudChallengeApp.
 */
angular.module('storycloudChallengeApp')
  .factory('Resource', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
