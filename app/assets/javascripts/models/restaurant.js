YelpClone.Models.Restaurant = Backbone.Model.extend({
  urlRoot: '/api/restaurants',

  parse: function(response) {
    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      delete(response.reviews);
    }

    if (response.taggings) {
      this.taggings().set(response.taggings, { parse: true });
      delete(response.taggings);
    }

    if (response.photos) {
      this.photos().set(response.photos, { parse: true });
      delete(response.photos);
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
    if (!this._taggings) {
      this._taggings = new YelpClone.Collections.Taggings([], {
        restaurant: this
      });
    }

    return this._taggings;
  },

  photos: function() {
    if (!this._photos) {
      this._photos = new YelpClone.Collections.Photos([], {
        restaurant: this
      });
    }

    return this._photos;
  }
});
