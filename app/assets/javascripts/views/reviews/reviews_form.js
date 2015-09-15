YelpClone.Views.ReviewsForm = Backbone.View.extend({
  tagName: 'form',
  template: JST['reviews/new'],

  events: {
    'click button.post-review': 'createReview'
  },

  initialize: function(options) {
    this.restaurant = options.restaurant;
  },

  render: function() {
    this.$el.html(this.template({ restaurant: this.restaurant }));
    return this;
  }
});
