window.YelpClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new YelpClone.Routers.Router({ $rootEl: $('#content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  YelpClone.initialize();
});
