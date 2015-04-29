'use strict';

/**
 * @ngdoc function
 * @name claudeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the claudeApp
 */
angular.module('claudeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
