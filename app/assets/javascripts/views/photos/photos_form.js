YelpClone.Views.PhotosForm = Backbone.View.extend({
  template: JST['photos/new'],

  events: {
    'submit .upload-restaurant-image': 'addPhotos',
    "change #input-image": "fileInputChange"
  },

  initialize: function(options) {
    this.restaurant = options.restaurant;
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.addClass('newRestaurantPhoto');

    return this;
  },

  addPhotos: function(event) {
    event.preventDefault();

    var file = this.$('#input-image')[0].files[0];
    var formData = new FormData();
    formData.append('photo[image]', file);
    formData.append('photo[user_id]', YelpClone.currentUser.id);
    formData.append('photo[restaurant_id]', this.restaurant.id);

    this.model.saveFormData(formData, {
      success: function() {
        this.restaurant.photos().add(this.model);
        Backbone.history.navigate(
          '#/restaurants/' + this.restaurant.id,
          { trigger: true }
        );
      }.bind(this)
    });
  },

  fileInputChange: function(event) {
    event.preventDefault();
    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    this.$el.find('.preview').append('<img src="" id="preview-restaurant-image">');

    reader.onloadend = function() {
      that._updatePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
    }
  },

  _updatePreview: function(src) {
    this.$el.find('#preview-restaurant-image').attr("src", src);
  }
});
