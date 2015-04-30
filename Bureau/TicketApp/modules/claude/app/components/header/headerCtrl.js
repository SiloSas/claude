'use strict';
angular.module('claudeApp')
    .controller('headerCtrl', ['$scope', 'detectPath', 'detectSize',
        function ($scope, detectPath, detectSize) {

            $scope.path = false;

            detectPath.getPath().then(function (path) {
                $scope.path = path;
            });

    }]);