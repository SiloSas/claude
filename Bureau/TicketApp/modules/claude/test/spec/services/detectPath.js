'use strict';
var mock, notify;
beforeEach(module('claudeApp'));
beforeEach(function() {
    mock = {alert: jasmine.createSpy()};

    module(function($provide) {
        $provide.value('$window', mock);
    });

    inject(function($injector) {
        detectPath = $injector.get('detectPath');
    });
});

it('should return pathName', function() {
    detectPath('home');
    detectPath('search');
    detectPath('artist');
    detectPath('event');
    detectPath('organizer');
    detectPath('iframe');
    detectPath(false);

    expect(mock.alert).toHaveBeenCalled(detectPath);
});