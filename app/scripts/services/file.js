'use strict';

/**
 * @ngdoc service
 * @name storycloudChallengeApp.File
 * @description
 * # File
 * Factory in the storycloudChallengeApp.
 */
angular.module('storycloudChallengeApp')
  .factory('File', ['Resource', function (Resource) {
    // File class to return
    var File = {};
    // Extend the Resource class into the File class
    angular.extend(File, Resource)
    
    // Get/Set a filename
    File.prototype.name = function (value) {
      return this.attr('name', value);
    };
    
    // Get/Set a filename
    File.prototype.type = function (value) {
      return this.attr('type', value);
    };
    
    // Get/Set a filename
    File.prototype.created = function (value) {
      return this.attr('created', value);
    };
    
    // Get/Set a filename
    File.prototype.creator = function (value) {
      return this.attr('creator', value);
    };
    
    // Get/Set a filename
    File.prototype.other = function (value) {
      return this.attr('other', value);
    };
    
    // Public API here
    return File;
  }]);
