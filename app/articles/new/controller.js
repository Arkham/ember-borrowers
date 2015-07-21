import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed('model.description', function() {
    return Ember.isPresent(this.get('model.description'));
  }),

  actions: {
    save: function() {
      console.log('+- save called from articles new controller');

      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill the description');
        return false;
      }
    }
  }
});
