YelpClone.Models.Helpfulness = Backbone.Model.extend({
  initialize: function(options) {
    this.review = options.review
  },

  urlRoot: function() {
    return '/api/reviews/' + this.review.id + '/helpfulnesses';
  }
});
