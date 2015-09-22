YelpClone.Views.Header = Backbone.View.extend({
  template: JST['header'],

  events: {
    'click .sign-out-link': 'signOut',
    'click submit-search': 'search'
  },

  initialize: function() {
    this.listenTo(YelpClone.currentUser, "signIn signOut", this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template({ currentUser: YelpClone.currentUser }));

    return this;
  },

  signOut: function(event) {
    event.preventDefault();
    YelpClone.currentUser.signOut({
      success: function() {
        Backbone.history.navigate('#/session/new', { trigger: true });
      }
    });
  },

  search: function(event) {
    event.preventDefault();
  }
});
