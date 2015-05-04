angular.module('claudeApp').directive('ngPlayer', function(){
    return{
        restrict : 'C',
        controller : 'PlayerCtrl',
        templateUrl : 'components/player/player.html'
    }
});