YelpClone.Collections.Reviews = Backbone.Collection.extend({
  model: YelpClone.Models.Review,

  initialize: function(model, options) {
    this.restaurant = options ? options.restaurant : null;
  },

  comparator: function(review) {
    return -review.get('updated_at');
  },

  url: function() {
    if (!this.restaurant) {
      return '/api/reviews';
    }

    return this.restaurant.url() + '/reviews';
  }
});
