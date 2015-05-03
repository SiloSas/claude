angular.module('claudeApp').factory('IssuesFactory', ['$http', '$q',
    function ($http, $q) {
        var factory = {
            issues : false,
            getIssues : function () {
                var deferred = $q.defer();
                $http.get('/issues').
                    success(function (data) {
                        factory.issues = data;
                        deferred.resolve(factory.issues)
                    });
                return deferred.promise;
            }
        };
        return factory;
}]);