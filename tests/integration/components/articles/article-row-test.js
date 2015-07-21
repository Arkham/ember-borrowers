import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('articles/article-row', 'Integration | Component | articles/article row', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.set('possibleStates', ['returned', 'borrowed']);

  this.set('model', Ember.A([
    Ember.Object.create({
      description: 'Bag',
      notes: 'It is very pretty',
      createdAt: new Date(),
      state: 'borrowed'
    })
  ]));

  this.on('save', function() {
  });

  this.render(hbs`
    {{#each model as |article|}}
      {{articles/article-row article=article save="save" articleStates=possibleStates}}
    {{/each}}
  `);

  assert.equal(this.$('.description').text(), 'Bag');
  assert.equal(this.$('.notes').text(), 'It is very pretty');
});
