YelpClone.Views.Search = Backbone.View.extend({

	initialize: function () {
		this.listenTo(YelpClone.searchResults, "sync", this.render);
	},

	events: {
		"change .query": "search",
		"click .next-page": "nextPage"
	},

	template: JST['search/search'],

	render: function () {
		var content = this.template({
			results: YelpClone.searchResults
		});
		this.$el.html(content);

		return this;
	},

	search: function (event) {
		event.preventDefault();

		YelpClone.searchResults.query = this.$(".query").val();

		YelpClone.searchResults.fetch({
			data: {
				query: YelpClone.searchResults.query,
				page: 1
			}
		});

		this.$(".query").val('');
	},

	nextPage: function (event) {
		YelpClone.searchResults.fetch({
			data: {
				query: YelpClone.searchResults.query,
				page: YelpClone.searchResults.pageNum + 1
			},
			success: function () {
				YelpClone.searchResults.pageNum = YelpClone.searchResults.pageNum + 1;
			}.bind(this)
		});
	}
});
