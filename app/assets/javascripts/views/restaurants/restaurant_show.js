YelpClone.Views.RestaurantShow = Backbone.View.extend({
  template: JST['restaurants/show'],

  render: function() {
    this.$el.html(this.template({ restaurant: this.model }));
    return this;
  }
});
