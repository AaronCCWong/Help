YelpClone.Views.Header = Backbone.View.extend({
  template: JST['header'],

  events: {
    'click .sign-out-link': 'signOut',
    'submit form.search': 'search'
  },

  initialize: function() {
    YelpClone.searchResults = new YelpClone.Collections.SearchResults();
    YelpClone.searchResults.pageNum = 1;

    this.listenTo(YelpClone.currentUser, "signIn signOut", this.render);
    this.listenTo(YelpClone.searchResults, "sync", this.render);
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

    YelpClone.searchResults.query = this.$(".query").val();

		YelpClone.searchResults.fetch({
			data: {
				query: YelpClone.searchResults.query,
				page: 1
			}
		});

		this.$(".query").val('');

    Backbone.history.navigate('#/search', { trigger: true });
  }
});
