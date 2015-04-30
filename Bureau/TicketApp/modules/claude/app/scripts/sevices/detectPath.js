angular.module('claudeApp')
    .factory('detectPath', function ($q, $location) {
        'use strict';
        var factory = {
            path : false,
            getPath: function () {
                var deferred = $q.defer()
                if ($location.path() === '/') {
                    factory.path = 'home';
                } else if ($location.path() === '/search') {
                    factory.path = 'search';
                } else if ($location.path().indexOf('/artiste') > -1) {
                    factory.path = 'artist';
                } else if ($location.path().indexOf('/event') > -1) {
                    factory.path = 'event';
                } else if ($location.path().indexOf('/organizer') > -1) {
                    factory.path = 'organizer';
                } else if ($location.path().indexOf('/lieu') > -1) {
                    factory.path = 'place';
                } else if ($location.path().indexOf('/iframeEvents') > -1) {
                    factory.path = 'iframe';
                } else {
                    factory.path = false;
                }
                deferred.resolve(factory.path);
                return deferred.promise;
            }
        };
    return factory;
    });