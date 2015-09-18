YelpClone.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  model: YelpClone.Models.User,

  getOrFetch: function(id) {
    var user = this.get(id);
    var users = this;

    if(!user) {
      user = new this.model({ id: id });
      user.fetch({
        success: function() {
          users.add(user);
        }
      });
    } else {
      user.fetch();
    }

    return user;
  }
});
