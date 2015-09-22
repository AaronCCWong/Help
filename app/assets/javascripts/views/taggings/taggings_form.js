YelpClone.Views.TaggingsForm = Backbone.View.extend({
  tagName: 'form',
  template: JST['taggings/new'],

  render: function() {
    this.$el.html(this.template());
    this.$el.addClass('tags');

    return this;
  }
});
