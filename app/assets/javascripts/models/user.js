YelpClone.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  toJSON: function() {
    var json = { user: _.clone(this.attributes) };
    return json;
  },

  saveFormData: function(formData, options) {
    var method = this.isNew() ? "POST" : "PUT";
    var model = this;

    $.ajax({
      url: _.result(model, 'url'),
      type: method,
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        model.set(model.parse(response));
        model.trigger('sync', model, response, options);
        options.success && options.success(model, response, options);
      },
      error: function (response){
        options.error && options.error(model, response, options);
      }
    });
  },

  parse: function(response) {
    if (response.helpfulness) {
      this.helpfulness().set(response.helpfulness, { parse: true });
      delete(response.helpfulness);
    }

    return response;
  },

  helpfulness: function() {
    if (!this._helpfulness) {
      this._helpfulness = new YelpClone.Collections.Helpfulness([], {
        user: this
      });
    }

    return this._helpfulness;
  }
});

YelpClone.Models.CurrentUser = YelpClone.Models.User.extend({
  url: "/api/session",

  initialize: function(options) {
    this.listenTo(this, "change", this.fireSessionEvent);
  },

  isSignedIn: function() {
    return !this.isNew();
  },

  signIn: function(options) {
    var model = this;
    var credentials = {
      "user[email]": options.email,
      "user[password]": options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function(data) {
        model.set(data);
        options.success && options.success();
      }
    });
  },

  signOut: function(options) {
    var model = this;

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        model.clear();
        options.success && options.success();
      }
    });
  },

  fireSessionEvent: function() {
    if(this.isSignedIn()) {
      this.trigger("signIn");
    } else {
      this.trigger("signOut");
    }
  }
});
