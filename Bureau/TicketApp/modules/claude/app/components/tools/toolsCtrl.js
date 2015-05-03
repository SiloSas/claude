angular.module('claudeApp').controller('toolsCtrl', function ($scope, $modal, $log, $rootScope) {
    $scope.connected = $rootScope.connected;
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'components/tools/tools.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                items: function () {
                    return $scope.items;
                },
                connected: function () {
                    return $scope.connected;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('claudeApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, $rootScope, items, connected, $http, $modal) {
    $scope.items = items;
    $scope.logout = function () {
        $http.get('/logout').
            success(function (data) {
                $rootScope.connected = false;
                $scope.info = 'vous êtes deconnecté';
                var modalInstance = $modal.open({
                    templateUrl: 'assets/partials/_infoModal.html',
                    controller: 'infoModalCtrl',
                    resolve: {
                        info: function () {
                            return $scope.info;
                        }
                    }
                });
                modalInstance.result.then(function () {
                });
            })
    };
    $scope.getPlaylists = function() {
        $http.get('/playlists').
            success(function(data) {
                $scope.playlists = data;
                console.log(data)
            })
    };
    $scope.deletePlaylist = function (playlistId, index) {
        $http.delete('/playlists/' + playlistId).
            success(function (data) {
                $scope.playlists.splice(index, 1)
            }).
            error (function (data) {
        })
    };
    $scope.ok = function () {
        $modalInstance.close();
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

