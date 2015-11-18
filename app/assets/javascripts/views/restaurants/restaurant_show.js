YelpClone.Views.RestaurantShow = Backbone.CompositeView.extend({
  template: JST['restaurants/show'],

  events: {
    'click #directions-link': 'getDirections',
    'click .close-button': 'closeModal',
    'click .modal-screen': 'closeModal',
    'click .new-tag': 'addTags',
    'submit form.tags': 'newTags'
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({ restaurant: this.model }));
    this.$el.addClass('restaurant-show');

    this.$el.find('#restaurant-average-rating').raty('destroy');
    this.$el.find('#restaurant-average-rating').raty({
      path: '',
      half: false,
      score: this.model.get('average_rating'),
      readOnly: true,
      scoreName: 'restaurant[average-rating]'
    });

    this.model.taggings().each(function(tag) {
      var view = new YelpClone.Views.TaggingsListItem({ model: tag });
      this.addSubview(this.$el.find('ul.restaurant-tags-list'), view);
    }.bind(this));

    this.model.reviews().each(function(review) {
      var view = new YelpClone.Views.ReviewsListItem({ model: review });
      this.addSubview(this.$el.find('ul.reviews-list'), view);
    }.bind(this));

    var i = 0;
    this.model.photos().each(function(photo) {
      this
        .$el
        .find('.restaurant-photos-list')
        .append('<li><img class="" src="' + photo.escape("image_url") + '"></li>');
      if (i === 3) { return; }
    }.bind(this));

    this.geocoder = new google.maps.Geocoder();
    var mapOptions = {
      center: { lat: 40.7295, lng: -73.999026 },
      zoom: 15
    };

    this._map = new google.maps.Map(document.getElementById("map"), mapOptions);
    this.codeAddress();

    return this;
  },

  codeAddress: function() {
    this.geocoder.geocode(
      {
        'address': this.model.escape('street_address') + this.model.escape('city_zipcode')
      },
      function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          this._location = results[0].geometry.location;
          this._map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: this._map,
              position: results[0].geometry.location
          });
        }
    }.bind(this));
  },

  getDirections: function(event) {
    this.$el.find('.modal-screen').toggleClass('hide')
    this.$el.find('.modal-map').toggleClass('hide')

    if (this.$el.find('#map-panel').children().length < 1) {
      event.preventDefault();
      this.directionsDisplay = new google.maps.DirectionsRenderer();
      this.directionsService = new google.maps.DirectionsService();
      var restaurant = new google.maps.LatLng(this._location.H, this._location.L);

      var mapOptions = {
        zoom: 11,
        center: restaurant
      }

      var newMap = new google.maps.Map(
        document.getElementById('map-directions'), mapOptions
      );
      this.directionsDisplay.setMap(newMap);
      this.directionsDisplay.setPanel(document.getElementById('map-panel'));

      this.calcRoute();
    }
  },

  calcRoute: function() {
    var start = "598 Broadway, New York, NY 10012";
    var end = this.model.escape('street_address') + this.model.escape('city_zipcode');
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.WALKING
    };

    this.directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      }
    }.bind(this));
  },

  closeModal: function(event) {
    event.preventDefault();

    this.$el.find('.modal-screen').toggleClass('hide');
    this.$el.find('.modal-map').toggleClass('hide');
  },

  addTags: function(event) {
    event.preventDefault();

    var view = new YelpClone.Views.TaggingsForm();
    this.$el.find('.new-tag').remove();
    this.$el.find('.restaurant-tags').append(view.render().$el);
  },

  newTags: function(event) {
    event.preventDefault();

    $(event.currentTarget).serializeJSON().tagging.tag.split(' ').forEach(
      function(tag) {
        var model = new YelpClone.Models.Tagging();
        var formData = {
          tag: tag,
          restaurant_id: this.model.id
        };

        model.save(formData, {
          success: function(model) {
            Backbone.history.navigate(
              '#/restaurants/' + this.model.id,
              { trigger: true }
            )
          }.bind(this)
        }
      )
    }.bind(this));
  }
});
