YelpClone.Views.RestaurantShow = Backbone.View.extend({
  tagName: 'form',
  template: JST['restaurants/new'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
