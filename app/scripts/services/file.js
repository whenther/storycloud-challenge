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
    
    //==========================================================================
    // Extend Resource class ===================================================
    //==========================================================================
    // Create the File class
    // (a subclass of Resource)
    var File = function (attributes) {
      // call super constructor.
      Resource.call(this, attributes); 
    };
    // extend Resource
    File.prototype = Object.create(Resource.prototype);
    File.prototype.constructor = File;
    
    //==========================================================================
    // File-specific Getter/Setters ============================================
    //==========================================================================
    // Get/Set a filename
    File.prototype.title = function (value) {
      return this.attr('title', value);
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
    
    //==========================================================================
    // Return ==================================================================
    //==========================================================================
    return File;
  }]);
