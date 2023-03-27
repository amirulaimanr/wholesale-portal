const assert = require('assert');
const app = require('../../src/app');

describe('\'supplier\' service', () => {
  it('registered the service', () => {
    const service = app.service('supplier');

    assert.ok(service, 'Registered the service (supplier)');
  });
});
