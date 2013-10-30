'use strict';

describe('Service: priceDetails', function () {

  // load the service's module
  beforeEach(module('scrollsguidepostFrontendApp'));

  // instantiate service
  var priceDetails;
  beforeEach(inject(function (_priceDetails_) {
    priceDetails = _priceDetails_;
  }));

  it('should do something', function () {
    expect(!!priceDetails).toBe(true);
  });

});
