window.YelpClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.currentUser = new YelpClone.Models.CurrentUser();
    this.currentUser.fetch();

    new YelpClone.Views.Header({ el: $('#header') })
    new YelpClone.Routers.Router({ $rootEl: $('#content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  YelpClone.initialize();
});
