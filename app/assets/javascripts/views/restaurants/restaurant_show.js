YelpClone.Views.RestaurantShow = Backbone.CompositeView.extend({
  template: JST['restaurants/show'],

  events: {
    'click button.write-review': 'reviewForm'
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({ restaurant: this.model }));
    this.model.reviews().each(function(review) {
      var view = new YelpClone.Views.ReviewsListItem({ model: review });
      this.addSubview(this.$el, view);
    }.bind(this));

    return this;
  },

  reviewForm: function(event) {
    event.preventDefault();

  }
});
