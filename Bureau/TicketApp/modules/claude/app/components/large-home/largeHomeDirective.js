angular.module('claudeApp').directive('largeHome', function () {
    return {
        restrict : 'E',
        controller: 'LargeHomeCtrl',
        templateUrl: 'components/large-home/largeHome.html'
    }
});