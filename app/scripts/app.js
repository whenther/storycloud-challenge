'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */
angular
  .module('storycloudChallengeApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/folder'
      })
      .when('/folder', {
        templateUrl: 'views/folder.html',
        controller: 'FolderCtrl',
        controllerAs: 'folder'
      })
      .when('/file', {
        templateUrl: 'views/file.html',
        controller: 'FileCtrl',
        controllerAs: 'file'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
