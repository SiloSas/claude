'use strict';

describe('Controller: headerCtrl', function () {

    // load the controller's module
    beforeEach(module('claudeApp'));

    var headerCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        headerCtrl = $controller('headerCtrl', {
            $scope: scope
        });
    }));

    it('should attach the location path name to the scope', function () {
        expect(scope.path).toEqual('home');
    });
});