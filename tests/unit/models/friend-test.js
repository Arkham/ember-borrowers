import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('friend', 'Unit | Model | friend', {
  needs: ['model:article']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('fullName joins firstName and lastName', function(assert) {
  var model = this.subject({
    firstName: 'Syd',
    lastName: 'Barrett'
  });

  assert.equal(model.get('fullName'), 'Syd Barrett');

  Ember.run(function() {
    model.set('firstName', 'John');
  });

  assert.equal(model.get('fullName'), 'John Barrett');
});

test('has many articles', function(assert) {
  var klass = this.subject().constructor;

  var relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles');
  assert.equal(relationship.kind, 'hasMany');
});
