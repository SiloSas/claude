
angular.module('claudeApp').directive('ngConnect', function(){
    return{
        restrict : 'E',
        controller : 'connectCtrl',
        templateUrl : 'components/connect/connectForm.html'
    }
});