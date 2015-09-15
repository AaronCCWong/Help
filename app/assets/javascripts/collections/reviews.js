YelpClone.Collections.Reviews = Backbone.Collection.extend({
  models: YelpClone.Models.Review,
  url: '/api/reviews'
});
