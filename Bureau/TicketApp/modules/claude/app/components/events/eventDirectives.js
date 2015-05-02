angular.module('claudeApp').
    directive('eventMin', ['$scope', '$window', function ($scope, $window) {
        return {
            restrict : 'E',
            templateUrl: 'components/events/eventMin.html',
            scope : true,
            link : function (element) {
                function resizeElem () {
                    $(element).find('.img_min').css('height', ($(element).clientWidth * 0.376) / 2);
                }
                resizeElem();
                $window.addEventListener('resize', resizeElem);
                $scope.$on('$destroy', function () {
                    $window.removeEventListener('resize', resizeElem);
                })
            }
        }
    }]);