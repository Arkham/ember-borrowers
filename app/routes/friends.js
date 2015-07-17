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
    },

    delete: function(friend) {
      console.log('+--- delete called from friends route');

      friend.destroyRecord().then(() => {
        this.transitionTo('friends.index');
      });
    }
  }
});
