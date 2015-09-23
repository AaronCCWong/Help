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
      score: this.model.get('average_rating'),
      readOnly: true,
      scoreName: 'restaurant[average-rating]'
    });

    return this;
  }
});
