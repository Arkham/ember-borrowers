import { moduleForModel, test } from 'ember-qunit';

moduleForModel('article', 'Unit | Model | article', {
  needs: ['model:friend']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});
