YelpClone.Collections.Reviews = Backbone.Collection.extend({
  models: YelpClone.Models.Review,

  initialize: function(model, options) {
    this.restaurant = options.restaurant;
  },

  url: function() {
    return this.restaurant.url() + '/reviews';
  }
});
