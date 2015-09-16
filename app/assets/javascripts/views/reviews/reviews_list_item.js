YelpClone.Views.ReviewsListItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['reviews/list_item'],

  render: function() {
    debugger
    this.$el.html(this.template({ review: this.model }));
    return this;
  }
});
