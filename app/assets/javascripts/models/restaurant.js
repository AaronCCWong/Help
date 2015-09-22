YelpClone.Models.Restaurant = Backbone.Model.extend({
  urlRoot: '/api/restaurants',

  parse: function(response) {
    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      delete(response.reviews);
    }
    debugger
    if (response.taggings) {
      this.taggings().set(response.taggings, { parse: true });
      delete(response.taggings);
    }

    return response;
  },

  reviews: function() {
    if (!this._reviews) {
      this._reviews = new YelpClone.Collections.Reviews([], {
        restaurant: this
      });
    }

    return this._reviews;
  },

  taggings: function() {
    this._taggings = new YelpClone.Collections.Taggings([], {
      restaurant: this
    });

    return this._taggings;
  }
});
