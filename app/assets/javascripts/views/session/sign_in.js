YelpClone.Views.SignIn = Backbone.View.extend({
  initialize: function(options) {
    this.callback = options.callback;
    this.listenTo(YelpClone.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit form.sign_in": "submit"
  },

  template: JST['session/sign_in'],

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().user;

    YelpClone.currentUser.signIn({
      email: formData.email,
      password: formData.password
    });
  },

  signInCallback: function(event) {
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate('', { trigger: true });
    }
  }
});
