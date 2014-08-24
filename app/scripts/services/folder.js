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
    
    //==========================================================================
    // Extend Collection class =================================================
    //==========================================================================
    // Create the Folder class
    // (a subclass of Collection)
    var Folder = function (id, name) {
      // call super constructor.
      Collection.call(this, id, name); 
    };
    // extend Resource
    Folder.prototype = Object.create(Collection.prototype);
    Folder.prototype.constructor = Folder;
    
    // No new methods needed
    
    // Public API here
    return Folder;
  }]);
