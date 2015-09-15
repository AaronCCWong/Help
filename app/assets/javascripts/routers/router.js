YelpClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'restaurants/:id': 'show'
  },

  initialize: function(options) {
    this.collection = new YelpClone.Collections.Restaurants();
    this.collection.fetch();
    this.$rootEl = options.$rootEl;
  },

  home: function() {

  },

  show: function(id) {
    var model = this.collection.getOrFetch(id);
  }
});
