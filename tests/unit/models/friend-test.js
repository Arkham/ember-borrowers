import { moduleForModel, test } from 'ember-qunit';

moduleForModel('friend', 'Unit | Model | friend', {
  needs: ['model:article']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});
