angular.module('claudeApp').
    directive('artistMin', function () {
        return {
            restrict : 'E',
            templateUrl: 'components/artist/artistMin.html'
        }
    });