YelpClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'restaurants/new': 'restaurantNew',
    'restaurants/:id': 'restaurantShow',
    'restaurants/:restaurant_id/reviews/new': 'reviewNew'
  },

  initialize: function(options) {
    this.restaurantCollection = new YelpClone.Collections.Restaurants();
    this.restaurantCollection.fetch();
    this.$rootEl = options.$rootEl;
  },

  home: function() {
  },

  restaurantNew: function() {
    var model = new YelpClone.Models.Restaurant();
    var view = new YelpClone.Views.RestaurantsForm({
      model: model,
      collection: this.restaurantCollection
    });
    this._swapView(view);
  },

  restaurantShow: function(id) {
    var model = this.restaurantCollection.getOrFetch(id);
    var view = new YelpClone.Views.RestaurantShow({ model: model });
    this._swapView(view);
  },

  reviewNew: function(restaurant_id) {
    var restaurant = this.restaurantCollection.getOrFetch(restaurant_id);
    var model = new YelpClone.Models.Review({ restaurant_id: restaurant_id });
    var view = new YelpClone.Views.ReviewsForm({
      model: model,
      restaurant: restaurant
    });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
