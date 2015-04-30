'use strict';
angular.module('claudeApp')
    .controller('headerCtrl', ['$scope', 'detectPath',
        function ($scope, detectPath) {

            $scope.path = false;

            detectPath().then(function (path) {
                $scope.path = path
            })
    }]);