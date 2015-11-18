YelpClone.Views.Home = Backbone.CompositeView.extend({
  template: JST['home'],

  initialize: function(options) {
    this.helpfulnessCollection = options.helpfulnessCollection;
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.addClass('homepage-container group');

    var length = this.collection.models.length;
    if (length > 0) {
      var limit = (length < 10) ? length : 10;
      for (var idx = 0; idx < limit; idx++) {
        var view = new YelpClone.Views.ReviewsHomeListItem({
          model: this.collection.models[idx],
          helpfulnessCollection: this.helpfulnessCollection
        });
        this.addSubview(this.$el.find('ul.recent-reviews'), view);
      }
    }

    return this;
  }
});
