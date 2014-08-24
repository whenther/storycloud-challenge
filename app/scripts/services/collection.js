'use strict';

/**
 * @ngdoc service
 * @name storycloudChallengeApp.Collection
 * @description The Collection class
 * # Collection
 * Factory in the storycloudChallengeApp.
 */
angular.module('storycloudChallengeApp')
  .factory('Collection', function () {
    
    // Main collection class
    var Collection = function (name) {
      // public name
      this.name = name;
      
      // Private list of collection contents
      this._contents = [];
    };
    
    // Add a resource or collection
    Collection.prototype.create = function (object) {
      this._contents.push(object);
    };
    
    // Replace an entry by index
    Collection.prototype.update = function (index, object) {
      this._contents[index] = object;
    };
    
    // Remove an entry by index
    Collection.prototype.delete = function (index) {
      // use delete to keep other indices from changing 
      this._contents.delete(index);
    };
    
    // Return the contents of the container
    // Divide into collections and resources
    // Include index numbers for reference
    Collection.prototype.list = function () {
      // get shorter reference to contents
      var contents = this._contents,
      // the list object to populate and return
          list = {
            collections : [],
            resources   : []
          };
      
      // loop through contents
      for (var i=0; i<contents.length; i++) {
        
        // If the entry is a Collection
        if (contents[i] instanceof Collection) {
          // Add the collection to the list
          list.collections.push({
            id: i,
            collection: contents[i]
          });
        // Otherwise assume it's a resource
        } else {
          // Add the resource to the list
          list.resources.push({
            id: i,
            resource: contents[i]
          });
        }
      }
      
      // return the populated lists
      return list;
    };
    
    // Return the Collection class
    return Collection;
  });
