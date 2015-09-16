YelpClone.Models.Restaurant = Backbone.Model.extend({
  urlRoot: '/api/restaurants',

  parse: function(response) {
    if (response.reviews) {
      this.reviews().set(response.reviews);
      delete(response.reviews);
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
  }
});
