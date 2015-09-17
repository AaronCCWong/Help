YelpClone.Collections.Reviews = Backbone.Collection.extend({
  model: YelpClone.Models.Review,

  initialize: function(model, options) {
    this.restaurant = options.restaurant;
  },

  comparator: function(review) {
    return review.get('updated_at');
  },

  url: function() {
    return this.restaurant.url() + '/reviews';
  }
});
