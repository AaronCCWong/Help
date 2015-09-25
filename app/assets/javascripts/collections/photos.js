YelpClone.Collections.Photos = Backbone.Collection.extend({
  model: YelpClone.Models.Photo,

  url: function() {
    return this.restaurant.url() + '/photos'
  }
});
