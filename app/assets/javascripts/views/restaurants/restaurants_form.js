YelpClone.Views.RestaurantsForm = Backbone.View.extend({
  tagName: 'form',
  template: JST['restaurants/new'],

  events: {
    'click button.add-restaurant': 'addRestaurant'
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  addRestaurant: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).parent().serializeJSON();

    this.model.save(formData.restaurant, {
      success: function(model) {
        this.collection.add(model)
        Backbone.history.navigate(
          "#/restaurants/" + model.id,
          { trigger: true }
        );
      }.bind(this)
    });
  }
});
