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
    var Resource = function (attributes) {
      // Private resource info
      this._attributes = attributes || {};
    };
    
    // Get or set an attribute
    Resource.prototype.attr = function (key, value) {
      // If value specified, set that value
      if (value) {
        this._attributes[key] = value;
        // Return the new value
        return value;
      // Otherwise, get the current value
      } else {
        return this._attributes[key];
      }
    };

    // Public API here
    return Resource;
  });
