import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+--- save called from friends route');

      return true;
    },

    cancel: function() {
      console.log('+--- cancel called from friends route');

      return true;
    }
  }
});
