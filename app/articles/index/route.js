import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let articles = this.modelFor('friends/show').get('articles');

    if (articles.get('isFulfilled')) {
      console.log('reloading articles');
      articles.reload();
    }

    return articles;
  },

  actions: {
    save: function(model) {
      model.save();
      return false;
    }
  }
});
