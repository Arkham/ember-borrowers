import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    function() {
      return Ember.isPresent(this.get('model.email')) &&
        Ember.isPresent(this.get('model.firstName')) &&
        Ember.isPresent(this.get('model.lastName')) &&
        Ember.isPresent(this.get('model.twitter'));
    }
  ),

  actions: {
    save: function() {
      console.log('+- save called from friends base controller');

      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }

      return false;
    },

    cancel: function() {
      console.log('+- cancel called from friends base controller');

      return true;
    }
  }
});
