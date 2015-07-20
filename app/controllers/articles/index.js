import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['show'],
  possibleStates: ['borrowed', 'returned'],

  contentDidChange: Ember.observer('model.[]', function() {
    console.log('called when we add or remove an article');
  }),

  stateDidChange: Ember.observer('model.@each.state', function() {
    console.log('called when the state property changes for any of the articles');
  })
});
