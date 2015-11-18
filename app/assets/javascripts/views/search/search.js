YelpClone.Views.Search = Backbone.CompositeView.extend({
	events: {
		"submit form.search": "search",
		"click .sort-by-rating": "sortByRating",
		"click .sort-by-reviews": "sortByReviews"
	},

	template: JST['search/search'],

	initialize: function () {
		this.listenTo(YelpClone.searchResults, "sync sort", this.render);
	},

	render: function () {
		this.$el.html(this.template({ results: YelpClone.searchResults }));
		if (YelpClone.searchResults.length > 0) {
			this.$el.find('.results-view').toggleClass('hide');
		}

		YelpClone.searchResults.each(function(result) {
			var view = new YelpClone.Views.SearchListItem({ model: result });
			this.addSubview('.results-list', view);
		}.bind(this));

		this.geocoder = new google.maps.Geocoder();
    var mapOptions = {
      center: { lat: 40.724948, lng: -73.9967097 },
      zoom: 11
    };

		this._map = new google.maps.Map(
			document.getElementById("search-map"),
			mapOptions
		);

		YelpClone.searchResults.each(function(result) {
			var position = {
				lat: parseFloat(result.escape('latitude')),
				lng: parseFloat(result.escape('longitude'))
			};

			new google.maps.Marker({ position: position, map: this._map });
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

	sortByRating: function(event) {
		event.preventDefault();

		YelpClone.searchResults.comparator = function(restaurant) {
			return -restaurant.get('average_rating');
		};
		YelpClone.searchResults.sort();
	},

	sortByReviews: function(event) {
		event.preventDefault();

		YelpClone.searchResults.comparator = function(restaurant) {
			return -restaurant.get('number_of_reviews');
		};
		YelpClone.searchResults.sort();
	},

	remove: function() {
    Backbone.CompositeView.prototype.remove.call(this);

    YelpClone.searchResults = new YelpClone.Collections.SearchResults();
    YelpClone.searchResults.pageNum = 1;
  }
});
