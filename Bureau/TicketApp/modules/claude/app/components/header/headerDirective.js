'use strict';
angular.module('claudeApp')
    .directive('header', function () {
        return {
            controller: 'headerCtrl',
            restrict : 'E',
            templateUrl : 'components/header/header.html'
        }
    });