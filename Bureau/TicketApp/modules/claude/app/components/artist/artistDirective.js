angular.module('claudeApp').
    directive('artistMin', function () {
        return {
            restrict : 'E',
            templateUrl: 'components/artist/artistMin.html'
        }
    });

angular.module('claudeApp').
    directive('artistFacebookMin', function () {
        return {
            restrict : 'E',
            templateUrl: 'components/artist/artistFacebookMin.html',
            controller: 'ArtistFacebookMinCtrl'
        }
    });