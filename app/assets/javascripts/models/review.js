YelpClone.Models.Review = Backbone.Model.extend({

  urlRoot: function() {
    return '/api/restaurants/' + this.get('restaurant_id') + '/reviews';
  },

  parse: function(response) {
    if (response.user) {
      this.author().set(response.user, { parse: true });
      delete(response.user);
    }

    return response;
  },

  author: function() {
    if (!this._author) {
      this._author = new YelpClone.Models.User();
    }

    return this._author;
  }
});
