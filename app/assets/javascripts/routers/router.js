YelpClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    '_=_': 'home',
    'restaurants/new': 'restaurantNew',
    'restaurants/:id': 'restaurantShow',
    'restaurants/:restaurant_id/reviews/new': 'reviewNew',
    'users/new': 'usersNew',
    'users/:id': 'usersShow',
    'session/new': 'signIn',
    'search' : 'search'
  },

  initialize: function(options) {
    this.restaurantCollection = new YelpClone.Collections.Restaurants();
    this.restaurantCollection.fetch();

    this.usersCollection = new YelpClone.Collections.Users();
    this.usersCollection.fetch();

    this.reviewsCollection = new YelpClone.Collections.Reviews();
    this.reviewsCollection.fetch();

    this.helpfulnessCollection = new YelpClone.Collections.Helpfulness();
    this.helpfulnessCollection.fetch();

    this.$rootEl = options.$rootEl;
  },

  home: function() {
    var view = new YelpClone.Views.Home({
      collection: this.reviewsCollection,
      helpfulnessCollection: this.helpfulnessCollection
    });

    this._swapView(view);
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
    var callback = this.usersShow.bind(this, id);
    if (!this._requireSignedIn(callback)) {
      return;
    } else if (parseInt(id) !== YelpClone.currentUser.id) {
      this.usersShow(YelpClone.currentUser.id);
      Backbone.history.navigate(
        '#/users/' + YelpClone.currentUser.id,
        { trigger: true }
      )
      return;
    }

    var model = this.usersCollection.getOrFetch(id);
    var showView = new YelpClone.Views.UsersShow({
      model: model,
      collection: this.usersCollection
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

  search: function () {
		var view = new YelpClone.Views.Search();

		this._swapView(view);
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
