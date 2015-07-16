import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel: function() {
      console.log('+- cancel called from friends show controller');

      this.transitionToRoute('friends.show', this.get('model'));

      return false;
    }
  }
});
