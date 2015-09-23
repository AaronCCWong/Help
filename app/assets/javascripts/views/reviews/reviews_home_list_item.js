YelpClone.Views.ReviewsHomeListItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['reviews/home_list_item'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({
      restaurant: this.model.restaurant(),
      review: this.model,
      user: this.model.author()
    }));
    this.$el.addClass('home-review group');

    this.$el.find('#home-star-rating').raty('destroy');
    this.$el.find('#home-star-rating').raty({
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
