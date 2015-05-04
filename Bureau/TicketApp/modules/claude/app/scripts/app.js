'use strict';

/**
 * @ngdoc overview
 * @name claudeApp
 * @description
 * # claudeApp
 *
 * Main module of the application.
 */
angular
  .module('claudeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mm.foundation',
    'ngStorage',
    'ng-oboe',
    'ngMaterial',
    'ngMap',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
