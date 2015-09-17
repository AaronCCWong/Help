YelpClone.Views.ReviewsListItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['reviews/list_item'],

  initialize: function(options) {
    this.user = options.user;
  },

  render: function() {
    this.$el.html(this.template({
      review: this.model,
      user: this.user
    }));
    return this;
  }
});
