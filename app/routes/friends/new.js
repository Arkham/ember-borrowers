import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },

  activate: function() {
    console.log('+-- activate hook called from friends new route');
  },

  deactivate: function() {
    console.log('+-- deactivate hook called from friends new route');

    var model = this.modelFor('friends/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
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
