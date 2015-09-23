YelpClone.Views.Search = Backbone.CompositeView.extend({
	events: {
		"submit form.search": "search",
		"click .next-page": "nextPage"
	},

	template: JST['search/search'],

	initialize: function () {
		this.listenTo(YelpClone.searchResults, "sync", this.render);
	},

	render: function () {
		this.$el.html(this.template({ results: YelpClone.searchResults }));

		YelpClone.searchResults.each(function(result) {
			var view = new YelpClone.Views.SearchListItem({ model: result });
			this.addSubview(this.$el.find('.results-list'), view);
		}.bind(this));

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
		event.preventDefault();

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
