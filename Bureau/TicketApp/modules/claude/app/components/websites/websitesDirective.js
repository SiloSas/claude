angular.module('claudeApp').
    directive('websites', function () {
        return {
            restrict : 'E',
            templateUrl: 'components/websites/websites.html'
        }
    });