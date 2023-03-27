const assert = require('assert');
const app = require('../../src/app');

describe('\'buyer\' service', () => {
  it('registered the service', () => {
    const service = app.service('buyer');

    assert.ok(service, 'Registered the service (buyer)');
  });
});
