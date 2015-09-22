YelpClone.Views.UsersForm = Backbone.View.extend({
  template: JST['users/new'],

  events: {
    'click button.sign-up': 'createUser'
  },

  render: function(){
    this.$el.html(this.template({ user: this.model }));

    return this;
  },

  createUser: function(event) {
    event.preventDefault();

    var userData = $(event.currentTarget).parent().serializeJSON().user;

    this.model.set(userData);
    this.model.save({}, {
      success: function() {
        YelpClone.currentUser.fetch();
        this.collection.add(this.model, { merge: true });
        Backbone.history.navigate('', { trigger: true });
      }.bind(this)
    });
  }
});
