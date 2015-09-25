YelpClone.Models.Photo = Backbone.Model.extend({
  urlRoot: function() {
    return 'api/restaurants/' + this.get('restaurant_id') + '/photos'
  },

  toJSON: function() {
    var json = { photo: _.clone(this.attributes) };
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
  }
});
