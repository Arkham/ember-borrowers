import Ember from 'ember';

export default Ember.Controller.extend({
  showReturned: false,
  queryParams: ['showReturned'],
  possibleStates: ['borrowed', 'returned'],

  filteredResults: Ember.computed('model.@each.state', 'showReturned', function() {
    if (this.get('showReturned') === false) {
      return this.get('model');
    } else {
      return this.get('model').filterBy('state', 'returned');
    }
  }),

  contentDidChange: Ember.observer('model.[]', function() {
    console.log('called when we add or remove an article');
  }),

  stateDidChange: Ember.observer('model.@each.state', function() {
    console.log('called when the state property changes for any of the articles');
  }),

  actions: {
    toggleShowReturned: function() {
      this.toggleProperty('showReturned');
    }
  }
});
