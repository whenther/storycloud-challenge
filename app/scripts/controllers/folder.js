'use strict';

/**
 * @ngdoc function
 * @name storycloudChallengeApp.controller:FolderCtrl
 * @description
 * # FolderCtrl
 * Controller of the storycloudChallengeApp
 */
angular.module('storycloudChallengeApp')
  .controller('FolderCtrl', ['$scope', '$routeParams', 'filesystem', function ($scope, $routeParams, filesystem) {
    var scope = this;
    
    // Get the file's folder's ID from the route's paramaters
    var folderId = Number($routeParams.folderId),
    // get the folder object
        folder = filesystem.folders[folderId];
    
    scope.attr = function (file, attr) {
      return file.attr(attr);
    };
    
    //==========================================================================
    // Folder data =============================================================
    //==========================================================================
    scope.id = folderId;
    
    // Folder name to scope
    scope.name = folder.name;
    
    // Folder list function to scope
    scope.contents = folder.contents();
    
    //==========================================================================
    // Selected  ===============================================================
    //==========================================================================
    // Array of slected files
    scope.selected = [];
    
     // Select/deselect a file
    scope.toggleSelect = function(fileId, event) {
      var selectedIndex = scope.selected.indexOf(fileId);

      // If the scope is not already selected
      if (selectedIndex === -1) {
        // Add it to the list
        scope.selected.push(fileId);
      }
      else {
        // Remove it otherwise
        scope.selected.splice(selectedIndex, 1);
      }
      
      event.preventDefault();
    };
    
    // Return the selected class if file is slected
    scope.isSelected = function (fileId) {
      // check if selected
      if (scope.selected.indexOf(fileId) !== -1) {
        return "selected";
      }
    };
    
    // Send an alert of each selected FileName
    scope.selectedAlert = function () {
      var selectedNames = '',
      // Get the list of files
          files = scope.contents.resources;
      
      for (var i=0; i<files.length; i++) {
        // If the file is selected
        if (scope.selected.indexOf(files[i].id) !== -1) {
          // Add a comma if there is already a list
          if (selectedNames)
            selectedNames += ', ';
          
          // Add the file to the selected names string
          selectedNames += files[i].resource.title();
        }
      }
      
      // When done going through files, fire the alert
      alert('Selected files: ' + selectedNames);
    };
    // Clear selections
    scope.selectedClear = function () {
      scope.selected = [];
    };
    
    //==========================================================================
    // Sort ====================================================================
    //==========================================================================
    scope.sortOn = '$index';
    
    // Change the sort field
    scope.sort = function (sortBy) {
      // If blank:
      if (!sortBy) {
        // sort by index
        scope.sortOn = '$index';
      } else {
        // Sort by given attr
        // which is under the resource object
        scope.sortOn = 'resource.' + sortBy + '()';
      }
    };
  }]);

