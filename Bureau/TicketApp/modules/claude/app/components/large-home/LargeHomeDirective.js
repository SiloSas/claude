angular.module('claudeApp').directive('largeHome', function () {
    return {
        restrict : 'E',
        templateUrl: 'components/large-home/largeHome.html',
        controller: 'LargeHomeCtrl'
    }
});