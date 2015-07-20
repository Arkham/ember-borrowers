import Ember from 'ember';

export default Ember.Controller.extend({
  hasEmail: Ember.computed.notEmpty('model.email');
  hasFirstName: Ember.computed.notEmpty('model.firstName');
  hasLastName: Ember.computed.notEmpty('model.LastName');
  hasTwitter: Ember.computed.notEmpty('model.twitter');

  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
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
