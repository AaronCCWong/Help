YelpClone.Views.ReviewsListItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['reviews/list_item'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({
      review: this.model,
      user: this.model.author()
    }));

    this.$el.find('#star-rating').raty('destroy');
    this.$el.find('#star-rating').raty({
      path: '',
      half: false,
      score: function() {
        return parseInt(this.model.escape('rating'));
      }.bind(this),
      readOnly: true,
      scoreName: 'review[rating]'
    });

    return this;
  }
});
