import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel: function() {
      console.log('+- cancel called from friends new controller');

      this.transitionToRoute('friends');

      return false;
    }
  }
});