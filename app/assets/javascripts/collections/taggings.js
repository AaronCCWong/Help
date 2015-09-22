YelpClone.Collections.Taggings = Backbone.Collection.extend({
  model: YelpClone.Models.Tagging,

  url: function() {
    return this.restaurant.url() + '/taggings';
  }
});
