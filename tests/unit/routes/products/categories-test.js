import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | products/categories', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:products/categories');
    assert.ok(route);
  });
});
