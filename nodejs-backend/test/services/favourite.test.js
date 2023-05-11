const assert = require('assert');
const app = require('../../src/app');

describe('\'favourite\' service', () => {
  it('registered the service', () => {
    const service = app.service('favourite');

    assert.ok(service, 'Registered the service');
  });
});
