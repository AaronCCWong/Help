YelpClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    '_=_': 'home',
    'restaurants/new': 'restaurantNew',
    'restaurants/:id': 'restaurantShow',
    'restaurants/:restaurant_id/reviews/new': 'reviewNew',
    'users/new': 'usersNew',
    'users/:id': 'show',
    'session/new': 'signIn'
  },

  initialize: function(options) {
    this.restaurantCollection = new YelpClone.Collections.Restaurants();
    this.restaurantCollection.fetch();

    this.usersCollection = new YelpClone.Collections.Users();
    this.usersCollection.fetch();

    this.$rootEl = options.$rootEl;
  },

  home: function() {
    this.$rootEl.html('<p>HI</p>');
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

  usersNew: function() {
    if (!this._requireSignedOut()) {
      return;
    }

    var model = new this.usersCollection.model();
    var formView = new YelpClone.Views.UsersForm({
      collection: this.usersCollection,
      model: model
    });
    this._swapView(formView);
  },

  usersShow: function(id) {
    var callback = this.UsersShow.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = this.usersCollection.getOrFetch(id);
    var showView = new YelpClone.Views.UsersShow({
      model: model
    });
    this._swapView(showView);
  },

  signIn: function(callback) {
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new YelpClone.Views.SignIn({
      callback: callback
    });
    this._swapView(signInView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  },

  _requireSignedIn: function(callback) {
    if (!YelpClone.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback) {
    if (YelpClone.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function() {
    Backbone.history.navigate('', { trigger: true });
  }
});
