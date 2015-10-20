YelpClone.Collections.Reviews = Backbone.Collection.extend({
  model: YelpClone.Models.Review,

  initialize: function(model, options) {
    this.restaurant = options ? options.restaurant : null;
  },

  comparator: function(review) {
    var date = new Date(review.get('updated_at'))
    return -date;
  },

  url: function() {
    if (!this.restaurant) {
      return '/api/reviews';
    }

    return this.restaurant.url() + '/reviews';
  }
});
