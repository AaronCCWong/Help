YelpClone.Views.TaggingsForm = Backbone.View.extend({
  tagName: 'li',
  template: JST['taggings/list_item'],

  render: function() {
    this.$el.html(this.template({ tag: this.model }));

    return this;
  }
});
