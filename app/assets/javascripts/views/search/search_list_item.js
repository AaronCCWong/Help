YelpClone.Views.SearchListItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['search/list_item'],

  render: function() {
    this.$el.html(this.template({ result: this.model }));
    this.$el.addClass('group');

    this.$el.find('.average-restaurant-rating').raty('destroy');
    this.$el.find('.average-restaurant-rating').raty({
      path: '',
      half: false,
      score: this.getAverageRating.bind(this),
      readOnly: true,
      scoreName: 'restaurant[average-rating]'
    });

    return this;
  },

  getAverageRating: function() {
    var averageRating = 0;

    this.model.reviews().each(function(review) {
      averageRating += parseInt(review.escape('rating'));
    });

    if (this.model.reviews().length > 0) {
      return averageRating / this.model.reviews().length;
    } else {
      return 0;
    }
  }
});
