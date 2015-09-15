YelpClone.Models.Review = Backbone.Model.extend({
  urlRoot: function() {
    return '/api/restaurants/' + this.get('restaurant_id') + '/reviews';
  }
});
