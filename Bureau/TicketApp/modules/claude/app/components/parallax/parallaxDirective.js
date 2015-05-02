angular.module('claudeApp').
    directive('parallaxContent', ['$rootScope', '$scope', '$window',
        function ($rootScope, $scope, $window) {
        return {
            restrict : 'C',
            scope : true,
            link : function (element) {
                function resizeEl() {
                    if ($rootScope.path != 'home') {
                        $(element).css('margin-top', window.innerWidth * 0.376 + 'px');
                    } else {
                        $(element).css('margin-top', '500px');
                    }
                }

                resizeEl();
                $window.addEventListener('resize', resizeEl);
                $scope.$on('$destroy', function () {
                    $window.removeEventListener('resize', resizeEl);
                })
            }
        }
    }]);