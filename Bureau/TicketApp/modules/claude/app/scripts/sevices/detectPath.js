angular.module('claudeApp')
    .factory('detectPath', function ($q, $location) {
        var path = '';
        return function () {
            if ($location.path() === '/') {
                path = 'home';
            } else if ($location.path() === '/search') {
                path = 'search';
            } else if ($location.path().indexOf('/artiste') > -1) {
                path = 'artist';
            } else if ($location.path().indexOf('/event') > -1) {
                path = 'event';
            } else if ($location.path().indexOf('/organizer') > -1) {
                path = 'organizer';
            } else if ($location.path().indexOf('/lieu') > -1) {
                path = 'place';
            } else if ($location.path().indexOf('/iframeEvents') > -1) {
                path = 'iframe';
            } else {
                path = false;
            }
        }
    });