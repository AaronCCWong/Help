YelpClone.Views.Search = Backbone.CompositeView.extend({
	events: {
		"submit form.search": "search",
		"click .sort": "sortRestaurants"
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
      zoom: 13
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

	sortRestaurants: function(event) {
		var sorter;

		event.preventDefault();
		if ($(event.currentTarget).text() === 'Highest Rated') {
			sorter = 'average_rating';
		} else {
			sorter = 'number_of_reviews';
		}

		YelpClone.searchResults.comparator = function(restaurant) {
			return -restaurant.get(sorter);
		};
		YelpClone.searchResults.sort();
	},

	remove: function() {
    Backbone.CompositeView.prototype.remove.call(this);

    YelpClone.searchResults = new YelpClone.Collections.SearchResults();
    YelpClone.searchResults.pageNum = 1;
  }
});
