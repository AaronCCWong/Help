YelpClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'restaurants/new': 'new',
    'restaurants/:id': 'show'
  },

  initialize: function(options) {
    this.collection = new YelpClone.Collections.Restaurants();
    this.collection.fetch();
    this.$rootEl = options.$rootEl;
  },

  home: function() {
  },

  new: function() {
    var model = new YelpClone.Models.Restaurant();
    var view = new YelpClone.Views.RestaurantsForm({ model: model });
    this._swapView(view);
  }

  show: function(id) {
    var model = this.collection.getOrFetch(id);
    var view = new YelpClone.Views.RestaurantShow({ model: model });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
