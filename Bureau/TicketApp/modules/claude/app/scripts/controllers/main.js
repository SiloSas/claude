'use strict';

/**
 * @ngdoc function
 * @name claudeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the claudeApp
 */
angular.module('claudeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
