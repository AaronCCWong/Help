YelpClone.Models.Review = Backbone.Model.extend({

  urlRoot: function() {
    return '/api/restaurants/' + this.get('restaurant_id') + '/reviews';
  },

  parse: function(response) {
    if (response.user) {
      this.author().set(response.user, { parse: true });
      delete(response.user);
    }

    if (response.restaurant) {
      this.restaurant().set(response.restaurant, { parse: true });
      delete(response.restaurant);
    }

    if (response.helpfulness) {
      this.helpfulness().set(response.helpfulness, { parse: true });
      delete(response.helpfulness);
    }

    return response;
  },

  author: function() {
    if (!this._author) {
      this._author = new YelpClone.Models.User();
    }

    return this._author;
  },

  restaurant: function() {
    if (!this._restaurant) {
      this._restaurant = new YelpClone.Models.Restaurant();
    }

    return this._restaurant;
  },

  helpfulnesses: function() {
    if (!this._helpfulnesses) {
      this._helpfulnesses = new YelpClone.Models.Helpfulness();
    }

    return this._helpfulnesses;
  }
});
