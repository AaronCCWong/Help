YelpClone.Views.HelpfulnessNew = Backbone.View.extend({
  template: JST['helpfulness/helpfulness'],

  events: {
    'click li.helpfulness-button': 'useful'
  },

  initialize: function(options) {
    this.review = options.review;
  },

  render: function() {
    this.$el.html(this.template({ review: this.review }));

    return this;
  },

  useful: function(event) {
    event.preventDefault();
    if (!YelpClone.currentUser.isSignedIn()) {
      Backbone.history.navigate('#/session/new', { trigger: true });
      return;
    }

    var formData = {
      helpfulness: {
        user_id: YelpClone.currentUser.id,
        review_id: this.review.id,
        helpfulness: $(event.currentTarget).find('button').attr('class')
      }
    };

    var model = new YelpClone.Models.Helpfulness({ review: this.review });
    model.save(formData, {
      success: function(model) {
        this.review.fetch();
        this.collection.add(model);
        this.render();
      }.bind(this)
    });
  }
});
