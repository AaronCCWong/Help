YelpClone.Views.RestaurantShow = Backbone.CompositeView.extend({
  template: JST['restaurants/show'],

  events: {
    'click #directions-link': 'getDirections'
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({ restaurant: this.model }));
    this.model.reviews().each(function(review) {
      var view = new YelpClone.Views.ReviewsListItem({ model: review });
      this.addSubview(this.$el.find('ul.reviews'), view);
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
      { 'address': this.model.escape('address') },
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
  },

  calcRoute: function() {
    var start = "598 Broadway, New York, NY 10012";
    var end = this.model.escape('address');
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
  }
});
