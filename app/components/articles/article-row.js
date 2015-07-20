import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null,
  articleStates: null,

  setObserver: Ember.on('init', function() {
    this.addObserver('article.state', this, this.stateChanged);
  }),

  stateChanged: function() {
    var article = this.get('article');
    console.log(`article state changed to ${article.get('state')}`);
  },

  actions: {
    saveArticle: function() {
      let article = this.get('article');

      if (article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  }
});
