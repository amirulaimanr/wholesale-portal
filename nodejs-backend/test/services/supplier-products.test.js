const assert = require('assert');
const app = require('../../src/app');

describe('\'supplier-products\' service', () => {
  it('registered the service', () => {
    const service = app.service('supplier-products');

    assert.ok(service, 'Registered the service');
  });
});
