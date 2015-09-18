YelpClone.Views.GoogleMapShow = Backbone.View.extend({
  attributes: {
    id: "map-canvas"
  },

  initialize: function(options) {
    this.address = options.address;
  },

  render: function() {
    this.geocoder = new google.maps.Geocoder();
    var mapOptions = {
      center: { lat: 40.7295, lng: -73.999026 },
      zoom: 15
    };

    this._map = new google.maps.Map(this.el, mapOptions);
    this.codeAddress();
  },

  codeAddress: function() {
    this.geocoder.geocode(
      { 'address': this.address },
      function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          this._map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: this._map,
              position: results[0].geometry.location
          });
        }
    }.bind(this));
  }
});
