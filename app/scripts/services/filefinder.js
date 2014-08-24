'use strict';

/**
 * @ngdoc service
 * @name storycloudChallengeApp.fileFinder
 * @description
 * # fileFinder
 * Factory in the storycloudChallengeApp.
 */
angular.module('storycloudChallengeApp')
  .factory('fileFinder', function () {
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
