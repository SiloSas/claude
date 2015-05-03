angular.module('claudeApp').factory('InfoModal', ['$modal', function ($modal) {
    var factory = {
        displayInfo : function (info) {
            var modalInstance = $modal.open({
                templateUrl: 'components/infoModal/infoModal.html',
                controller: 'infoModalCtrl',
                resolve: {
                    info: function () {
                        return info;
                    }
                }
            });
            modalInstance.result.then(function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
    };
    return factory;
}]);