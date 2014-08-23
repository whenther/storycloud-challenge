'use strict';

/**
 * @ngdoc service
 * @name storycloudChallengeApp.Folder
 * @description
 * # Folder
 * Factory in the storycloudChallengeApp.
 */
angular.module('storycloudChallengeApp')
  .factory('Folder', ['Collection', function (Collection) {
    // File class to return
    var Folder = {};
    // Extend the Resource class into the File class
    angular.extend(Folder, Collection);
    
    // No new methods needed
    
    // Public API here
    return File;
  }]);
