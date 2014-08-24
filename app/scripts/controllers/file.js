'use strict';

/**
 * @ngdoc function
 * @name storycloudChallengeApp.controller:FileCtrl
 * @description
 * # FileCtrl
 * Controller of the storycloudChallengeApp
 */
angular.module('storycloudChallengeApp')
  .controller('FileCtrl', ['$routeParams', 'filesystem', function ($routeParams, filesystem) {
    var scope = this;
    
    // Get the file's folder's ID from the route's paramaters
    var folderId = Number($routeParams.folderId),
    // Get the file's ID
        fileId = Number($routeParams.fileId),
    // get the file object
        file = filesystem.folders[folderId]._contents[fileId];
    
    // Put the file object on the scope
    scope.resource = file;
    
  }]);
