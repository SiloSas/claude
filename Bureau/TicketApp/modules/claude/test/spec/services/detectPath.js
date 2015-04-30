'use strict';
describe('Factory: detectPath', function () {
    var detectPath;
    beforeEach(module('claudeApp'));
    beforeEach(function () {

        inject(function ($injector) {
            detectPath = $injector.get('detectPath');
        });

    });

    it('should return pathName', function () {
        expect(detectPath).toBe('home');
    });
});