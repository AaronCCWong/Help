YelpClone.Views.Home = Backbone.CompositeView.extend({
  template: JST['home'],

  initialize: function(options) {
    this.helpfulnessCollection = options.helpfulnessCollection;
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.addClass('homepage-container group');

    this.collection.sort().each(function(review) {
      var view = new YelpClone.Views.ReviewsHomeListItem({
        model: review,
        helpfulnessCollection: this.helpfulnessCollection
      });
      this.addSubview(this.$el.find('ul.recent-reviews'), view);
    }.bind(this));

    return this;
  }
});
