'use strict';

describe('Service: fileFinder', function () {

  // load the service's module
  beforeEach(module('storycloudChallengeApp'));

  // instantiate service
  var fileFinder;
  beforeEach(inject(function (_fileFinder_) {
    fileFinder = _fileFinder_;
  }));

  it('should do something', function () {
    expect(!!fileFinder).toBe(true);
  });

});
