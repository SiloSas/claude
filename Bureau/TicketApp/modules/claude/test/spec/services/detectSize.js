'use strict';
describe('Factory: detectSize', function () {
    var detectSize;
    beforeEach(module('claudeApp'));
    beforeEach(function () {

        inject(function ($injector) {
            detectSize = $injector.get('detectSize');
        });

    });

    it('should return windowSizeName', function () {
        expect(detectSize).toBe('large');
    });
});