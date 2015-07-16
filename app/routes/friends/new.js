import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },

  actions: {
    save: function() {
      console.log('+-- save called from friends new route');

      return true;
    },

    cancel: function() {
      console.log('+-- cancel called from friends new route');

      return true;
    }
  }
});
