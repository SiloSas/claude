'use strict';
describe('Factory: detectPath', function () {
    var detectPath, $rootScope, $location;

    beforeEach(module('claudeApp'));
    beforeEach(inject(function (_detectPath_, _$rootScope_, _$location_) {
        $location = _$location_;
        spyOn($location, 'path').and.returnValue('/');
        detectPath = _detectPath_;
        $rootScope = _$rootScope_;
    }));

    it('should return pathName', function () {
        expect($rootScope.path).toBe('home');
    });
});