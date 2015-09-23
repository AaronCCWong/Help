YelpClone.Views.UsersShow = Backbone.View.extend({
  template: JST['users/show'],

  events: {
    "submit form.upload-avatar": "submitAvatar",
    "change #input-image": "fileInputChange"
  },

  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  },

  submitAvatar: function(event) {
    event.preventDefault();
    var file = this.$('#input-image')[0].files[0];
    var formData = new FormData();
    formData.append('user[avatar]', file);

    this.model.saveFormData(formData, {
      success: function() {
        this.collection.add(this.model);
        Backbone.history.navigate(
          '#/users/' + this.model.id,
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
    this.$el.find('.preview').append('<img src="" id="preview-post-image">');

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
    this.$el.find('#preview-post-image').attr("src", src);
  }
});
