angular.module('claudeApp').
    controller('EventCtrl', ['$scope', 'EventsFactory', '$routeParams',
        function ($scope, EventFactory, $routeParams) {
            $scope.event = {};
            $scope.map = false;
            EventFactory.getEvent($routeParams.id).then(function (event) {
                $scope.event = event;
            })
    }]);